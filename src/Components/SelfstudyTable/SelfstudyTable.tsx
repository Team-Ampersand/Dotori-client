import React, { useState } from 'react';
import * as S from './Style';
import List from './List/List';
import { useRecoilState } from 'recoil';
import { TextLogo } from 'Assets/Svg';
import { classLookup, studyRank, studySearch } from 'Api/selfStudy';
import { useRole } from 'Hooks/useRole';
import { useSetRecoilState } from 'recoil';
import { list, classLookuped } from 'Atoms';
import { toast } from 'react-toastify';
import { Classification } from 'Components';

const SelfstudyTable: React.FC = () => {
	const [stuGrade, setStuGrade] = useState<string>('0');
	const [stuClass, setStuClass] = useState<string>('');
	const [stuName, setStuName] = useState<string>('');
	const setClassLookuped = useSetRecoilState(classLookuped);
	const [userlist, setUserList] = useRecoilState(list);
	const role = useRole();

	const onSubmit = async () => {
		if (parseInt(stuGrade + stuClass) > 0) {
			if (stuGrade !== '0') {
				if (stuClass === '0') {
					classLookup(stuGrade, role).then((res) => {
						res && setUserList(res.data.data);
						setClassLookuped(true);
					});
				} else {
					classLookup(stuGrade + stuClass, role).then((res) => {
						res && setUserList(res.data.data);
						setClassLookuped(true);
					});
				}
			} else toast.warning('학년을 선택해주세요');
		} else {
			studyRank(role).then((res) => {
				res && setUserList(res.data.data);
				setClassLookuped(false);
			});
		}
	};

	const onSearch = async () => {
		if (stuName === '') {
			toast.warning('이름을 입력해주세요');
			return;
		}
		studySearch(role, stuName).then((res) => {
			setUserList(res?.data.data);
			setClassLookuped(true);
		});
	};
	return (
		<S.Postioner>
			<S.SearchContainer>
				<Classification
					onSubmit={onSubmit}
					stuGrade={stuGrade}
					stuClass={stuClass}
					setStuGrade={setStuGrade}
					setStuClass={setStuClass}
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
			</S.SearchContainer>
			{userlist ? (
				<S.Content>
					<List />
				</S.Content>
			) : (
				<S.ExceptionWrapper>
					<TextLogo />
					<span>자습을 신청한 사람이 없어요</span>
				</S.ExceptionWrapper>
			)}
		</S.Postioner>
	);
};

export default SelfstudyTable;
