/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from 'react';
import * as S from './Style';
import { getStuInfo, getClassStuInfo, searchName } from 'Api/penaltyInfo';
import { useRole } from 'Hooks/useRole';
import { Classification, NameSearch, PenaltyGiveItem, StuPenaltyItem } from 'Components';

interface studentList {
	id: number;
	memberName: string;
	stuNum: string;
	ruleBigViolationList: string[];
}

const Penalty: React.FC = () => {
	const [studentList, setStudentList] = useState<studentList[]>([]);
	const [stuGrade, setStuGrade] = useState('0');
	const [stuClass, setStuClass] = useState('');
	const [stuName, setStuName] = useState<string>('');
	const [checkItems, setCheckItems] = useState<Array<string>>([]);
	const role = useRole();

	const GetStuInfo = async () => {
		return await getStuInfo(role);
	};

	const GetClassStuInfo = async () => {
		return await getClassStuInfo(role, parseInt(stuGrade + stuClass));
	};

	const onSubmit = () => {
		if (stuGrade + stuClass === '00') {
			GetStuInfo().then((res) => {
				res && setStudentList(res.data.list);
			});
		}
		if (parseInt(stuGrade + stuClass) > 0) {
			try {
				!/0[1-3]/.test(stuGrade + stuClass) ?
				GetClassStuInfo().then((res) => {
					res && setStudentList(res.data.list);
				}) : setStudentList([]);
			} catch (e: any) {
				throw Error(e);
			}
		}
	};

	const nameSearch = async () => {
		return await searchName(role, stuName);
	};

	const onSearch = () => {
		nameSearch().then((res) => {
			res && setStudentList(res.data.list);
		});
	};

	const handleKeyPress = (e: any) => {
		if (e.key === 'Enter') {
			onSearch();
		}
	};

	const handleSingleCheck = useCallback(
		(checked, id: string) => {
			if (checked) {
				setCheckItems([...checkItems, id]);
			} else {
				setCheckItems(checkItems.filter((el) => el !== id));
			}
		},
		[checkItems]
	);
	const csvData = (stuNum, memberName, ruleBigViolationList) => {
		return [
			{ 학번: `${stuNum}`, 이름: `${memberName}`, 규정위반내역: `${ruleBigViolationList}` }
		];
	}

	useEffect(() => {
		GetStuInfo().then((res) => {
			res && setStudentList(res.data.list);
		});
	}, []);

	return (
		<S.Positioner>
			<S.BoxContainer>
				<Classification
					onSubmit={onSubmit}
					stuGrade={stuGrade}
					stuClass={stuClass}
					setStuClass={setStuClass}
					setStuGrade={setStuGrade}
				/>
				<NameSearch
					onSearch={onSearch}
					setStuName={setStuName}
					handleKeyPress={handleKeyPress}
				/>
				<PenaltyGiveItem checked={checkItems} setCheckItems={setCheckItems} />
				<S.CsvLink
					data={studentList.map((stu) => csvData(stu.stuNum, stu.memberName, stu.ruleBigViolationList)[0])}
					filename="규정위반내역.csv"
				>엑셀 다운로드
				</S.CsvLink>
				<S.SelectStu>
					<S.SelectStus>선택된 학생</S.SelectStus>
					{checkItems.join(', ')}
				</S.SelectStu>
			</S.BoxContainer>
			<S.Container>
				<S.AuthorizationBoard>
					{studentList &&
						studentList.map((stu) => {
							return (
								<S.StuBoxContainer key={stu.id}>
									<S.CheckBox
										type="checkbox"
										onChange={(e) =>
											handleSingleCheck(e.target.checked, stu.stuNum)
										}
									/>
									<StuPenaltyItem
										key={stu.id}
										name={stu.memberName}
										stuNum={stu.stuNum}
										ruleBigViolationList={stu.ruleBigViolationList}
									/>
								</S.StuBoxContainer>
							);
						})}
				</S.AuthorizationBoard>
			</S.Container>
		</S.Positioner>
	);
};

export default Penalty;
