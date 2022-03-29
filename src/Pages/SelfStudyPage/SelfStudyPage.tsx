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
			if (parseInt(stuGrade + stuClass) > 0) {
				if (stuGrade !== '0') {
					if (stuClass === '0') {
						classLookup(stuGrade, role).then((res) => {
							res && setClassLookup(res.data.data);
						});
					} else {
						classLookup(stuGrade + stuClass, role).then((res) => {
							res && setClassLookup(res.data.data);
						});
					}
				} else alert('학년을 선택해주세요');
			} else alert('학년 반을 선택해주세요');
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
