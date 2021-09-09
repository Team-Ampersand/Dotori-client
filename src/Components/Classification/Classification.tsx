import React from "react";
import * as S from "./Style";

const Classification: React.FC = () => {
	return (
		<>
			<S.Form>
				<S.SelectBox>
					<S.Option selected>선택</S.Option>
					<S.Option>1</S.Option>
					<S.Option>2</S.Option>
					<S.Option>3</S.Option>
				</S.SelectBox>
				학년
				<S.SelectBox>
					<S.Option>선택</S.Option>
					<S.Option>1</S.Option>
					<S.Option>2</S.Option>
					<S.Option>3</S.Option>
					<S.Option>4</S.Option>
				</S.SelectBox>
				반
			</S.Form>
		</>
	);
};

export default Classification;
