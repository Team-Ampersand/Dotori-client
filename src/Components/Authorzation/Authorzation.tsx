import React, { useEffect, useState } from 'react';
import * as S from './Style';
import { getClassStuInfo, getStuInfo, searchName } from 'Api/stuInfo';
import { useRole } from 'Hooks/useRole';
import { Classification, StuAuthorityItem } from 'Components';

interface studentList {
	id: number;
	stuNum: number;
	memberName: string;
	roles: Array<any>;
	selfStudyStatus: string;
	gender: string;
}

const Authorzation: React.FC = () => {
	const [studentList, setStudentList] = useState<studentList[]>([]);
	const role = useRole();

	const GetClassStuInfo = async (all: boolean) => {
		return await all ? getClassStuInfo(role, parseInt(stuGrade + stuClass)) : getStuInfo(role);
	};

	const [stuGrade, setStuGrade] = useState<string>('0');
	const [stuClass, setStuClass] = useState<string>('');
	const [stuName, setStuName] = useState<string>('');

	const onSubmit = () => {
		try {
			!/0[1-3]/.test(stuGrade + stuClass) ?
				GetClassStuInfo(parseInt(stuGrade + stuClass) > 0).then((res) => {
					res && setStudentList(res.data.data);
				}) : setStudentList([])
		} catch (e: any) {
			throw Error(e);
		}
	};

	const nameSearch = async () => {
		return await searchName(role, stuName);
	};

	const onSearch = () => {
		nameSearch().then((res) => {
			res && setStudentList(res.data.data);
		});
	};

	useEffect(() => onSubmit(), []);

	return (
		<S.Positioner>
			<div>
				<Classification
					onSubmit={onSubmit}
					setStuClass={setStuClass}
					setStuGrade={setStuGrade}
					stuClass={stuClass}
					stuGrade={stuGrade}
				/>
				<S.SearchBox>
					<S.Search
						placeholder="이름을 입력해주세요"
						onChange={(e) => {
							setStuName(e.target.value);
						}}
						onKeyPress={(e) => {
							if (e.key === 'Enter') onSearch();
						}}
					/>
					<S.SearchBtn onClick={onSearch}>검색</S.SearchBtn>
				</S.SearchBox>
			</div>
			<S.AuthorizationBoard>
				{studentList &&
					studentList.map((stu) => (
						!/0\d{3}/.test(String(stu.stuNum)) &&
						<StuAuthorityItem
							key={stu.id}
							stuId={stu.id}
							stuNum={String(stu.stuNum)}
							memberName={stu.memberName}
							authority={stu.roles[0]}
							selfStudyStatus={stu.selfStudyStatus}
							gender={stu.gender}
						/>
					))}
			</S.AuthorizationBoard>
		</S.Positioner>
	);
};

export default Authorzation;
