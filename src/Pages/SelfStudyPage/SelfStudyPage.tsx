import React, { useState } from 'react';
import * as S from './Style';
import { PageTemplate } from '..';
import { SelfstudyTable, Classification, Sidebar } from '../../Components';
import { classLookup, studyRank } from 'Api/selfStudy';
import { useRole } from 'Hooks/useRole';
import { useSetRecoilState } from 'recoil';
import { list } from 'Atoms';

const SelfStudyPage: React.FC = () => {
	const [stuGrade, setStuGrade] = useState<string>('0');
	const [stuClass, setStuClass] = useState<string>('');
	const setClassLookup = useSetRecoilState(list);
	const role = useRole();
	const onSubmit = async () => {
		try {
			if (stuGrade + stuClass === '00') {
				const res = await studyRank(role);
				setClassLookup(res?.data.data);
			} else if (stuGrade + stuClass === '') {
				alert('아무것도 선택하지 않으셨어요');
			} else if (stuGrade === '' || stuGrade === '0') {
				alert('학년을 선택해주세요');
			} else if (stuClass === '' || stuClass === '0') {
				alert('반을 선택해주세요');
			} else {
				const res = await classLookup(stuGrade + stuClass, role);
				setClassLookup(res?.data.data);
			}
		} catch (e: any) {
			alert(
				e.message === 'Request failed with status code 404'
					? stuGrade + '학년' + stuClass + '반에는 신청한 학생이 없어요'
					: e
			);
		}
	};
	return (
		<S.Positioner>
			<Sidebar />
			<PageTemplate>
				<S.Container>
					<Classification
						onSubmit={onSubmit}
						stuGrade={stuGrade}
						stuClass={stuClass}
						setStuGrade={setStuGrade}
						setStuClass={setStuClass}
					/>
					<SelfstudyTable />
				</S.Container>
			</PageTemplate>
		</S.Positioner>
	);
};

export default SelfStudyPage;
