import React, { useState } from "react";
import * as S from "./Style";

const Classification: React.FC = () => {
	const onSubmit = () => {
		console.log(stuGrade + stuClass);
	};

	const [stuGrade, setStuGrade] = useState("");
	const gradeSelect = (e) => {
		setStuGrade(e.target.value);
	};

	const [stuClass, setStuClass] = useState("");
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
