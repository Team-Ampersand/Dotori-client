import React from 'react';
import * as S from './Style';

type SubmitFormProps = {
	onSubmit: (form: { music: string; singer: string; link: string }) => void;
};

const SongRequest: React.FC<SubmitFormProps> = ({ onSubmit }) => {
	return (
		<S.Postioner>
			<label>기상음악 신청</label>
			<S.InputWrapper>
				<p>URL 주소</p>
				<input name="link" placeholder="url을 입력하세요." type="text" />
				<button>신청하기</button>
			</S.InputWrapper>
		</S.Postioner>
	);
};

export const CheckUrl = (url) => {
	let regex =
		/(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;

	return regex.test(url);
};

export default SongRequest;
