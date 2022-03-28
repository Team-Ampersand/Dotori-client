/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from 'react';
import * as S from './Style';
import StuPenaltyItem from '../StuPenaltyItem/StuPenaltyItem';
import { getStuInfo, getClassStuInfo, searchName } from 'Api/penaltyInfo';
import PenaltyGiveItem from 'Components/PenaltyGiveItem/PenaltyGiveItem';
import { useRole } from 'Hooks/useRole';
import { Classification } from 'Components';

interface studentList {
	id: number;
	memberName: string;
	stuNum: string;
	ruleBigViolationList: string[];
}

const Penalty: React.FC = () => {
	const [studentList, setStudentList] = useState<studentList[]>([]);
	const [stuGrade, setStuGrade] = useState('');
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
				GetClassStuInfo().then((res) => {
					res && setStudentList(res.data.list);
				});
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

	const handleKeyPress = (e) => {
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
				<S.SearchBox>
					<S.Search
						pattern="\d*"
						placeholder="이름을 검색해주세요"
						onChange={(e) => {
							setStuName(e.target.value);
						}}
						onKeyPress={handleKeyPress}
					/>
					<S.Btn onClick={onSearch}>검색</S.Btn>
				</S.SearchBox>
				<PenaltyGiveItem checked={checkItems} setCheckItems={setCheckItems} />
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
