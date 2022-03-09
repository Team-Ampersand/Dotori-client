/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from 'react';
import * as S from './Style';
import StuPenaltyItem from '../StuPenaltyItem/StuPenaltyItem';
import penaltyInfo from 'Api/penaltyInfo';
import PenaltyGiveItem from 'Components/PenaltyGiveItem/PenaltyGiveItem';
interface studentList {
	id: number;
	memberName: string;
	stuNum: string;
}

const Penalty: React.FC = () => {
	const [studentList, setStudentList] = useState<studentList[]>([]);
	const [stuGrade, setStuGrade] = useState('');
	const [stuClass, setStuClass] = useState('');
	const [stuName, setStuName] = useState<string>('');
	const [checkItems, setCheckItems] = useState<Array<string>>([]);

	const getStuInfo = async () => {
		const role = await localStorage.getItem('role');
		return await penaltyInfo.getStuInfo(role);
	};

	const getClassStuInfo = async () => {
		const role = await localStorage.getItem('role');
		return await penaltyInfo.getClassStuInfo(
			role,
			parseInt(stuGrade + stuClass)
		);
	};

	const onSubmit = () => {
		if (parseInt(stuGrade + stuClass) > 0) {
			try {
				getClassStuInfo().then((res) => {
					res && setStudentList(res.data.list);
				});
			} catch (e: any) {
				throw Error(e);
			}
		} else return;
	};

	const nameSearch = async () => {
		const role = localStorage.getItem('role');
		return await penaltyInfo.searchName(role, stuName);
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

	useEffect(() => {
		try {
			getStuInfo().then((res) => {
				res && setStudentList(res.data.list);
			});
			onSearch();
		} catch (e: any) {
			throw Error(e);
		}
	}, []);

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

	return (
		<S.Positioner>
			<S.BoxContainer>
				<S.SelectBoxWrapper>
					<S.SelectBox
						onChange={({ target: { value } }) => {
							setStuGrade(value);
						}}
						value={stuGrade}
					>
						<S.Option value="" selected disabled hidden>
							선택
						</S.Option>
						<S.Option value="1">1</S.Option>
						<S.Option value="2">2</S.Option>
						<S.Option value="3">3</S.Option>
					</S.SelectBox>
					<S.Label>학년</S.Label>
					<S.SelectBox
						onChange={({ target: { value } }) => {
							setStuClass(value);
						}}
						value={stuClass}
					>
						<S.Option value="" selected disabled hidden>
							선택
						</S.Option>
						<S.Option value="1">1</S.Option>
						<S.Option value="2">2</S.Option>
						<S.Option value="3">3</S.Option>
						<S.Option value="4">4</S.Option>
					</S.SelectBox>
					<S.Label>반</S.Label>
					<S.Btn onClick={onSubmit}>검색</S.Btn>
				</S.SelectBoxWrapper>
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
				<PenaltyGiveItem checked={checkItems} />
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
											handleSingleCheck(e.target.checked, String(stu.stuNum))
										}
									/>
									<StuPenaltyItem
										key={stu.id}
										name={stu.memberName}
										stuNum={stu.stuNum}
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
