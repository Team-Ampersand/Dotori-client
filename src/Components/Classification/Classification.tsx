import React, { useState } from 'react';
import * as S from './Style';
import selfstudy from 'Api/selfStudy';
import { useSetRecoilState } from 'recoil';
import { list } from 'Atoms';
import role from 'Api/role';
import { rolelookup } from 'Utils/Libs/roleLookup';

const Classification: React.FC = () => {
	const [stuGrade, setStuGrade] = useState('');
	const [stuClass, setStuClass] = useState('');
	const setClassLookup = useSetRecoilState(list);

	const onSubmit = async () => {
		try {
			if (window.location.pathname === '/selfstudy') {
				if (stuGrade + stuClass === '00') {
					const res = await selfstudy.lookupstudy();
					setClassLookup(res.data.data);
				} else {
					const res = await selfstudy.classlookup(stuGrade + stuClass);
					setClassLookup(res.data.data);
				}
			}
		} catch (e: any) {
			alert(
				e.message === 'Error: Request failed with status code 404'
					? stuGrade + '학년' + stuClass + '반에는 신청한 학생이 없습니다'
					: e
			);
		}
	};

	const gradeSelect = (e) => {
		setStuGrade(e.target.value);
	};

	const classSelect = (e) => {
		setStuClass(e.target.value);
	};

	return (
		<>
			<S.SelectWrapper>
				<S.SelectBox onChange={gradeSelect} value={stuGrade}>
					<S.Option value="0">선택</S.Option>
					<S.Option value="1">1</S.Option>
					<S.Option value="2">2</S.Option>
					<S.Option value="3">3</S.Option>
				</S.SelectBox>
				<S.Label>학년</S.Label>
				<S.SelectBox onChange={classSelect} value={stuClass}>
					<S.Option value="0">선택</S.Option>
					<S.Option value="1">1</S.Option>
					<S.Option value="2">2</S.Option>
					<S.Option value="3">3</S.Option>
					<S.Option value="4">4</S.Option>
				</S.SelectBox>
				<S.Label>반</S.Label>
				<S.Btn onClick={onSubmit}>검색</S.Btn>
			</S.SelectWrapper>
		</>
	);
};

export default Classification;
