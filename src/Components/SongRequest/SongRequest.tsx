import React, { useEffect, useState } from 'react';
import * as S from './Style';
import music from 'Api/music';
import { getCookie } from 'Utils/Cookie';

const musicApply = async (musicUrl: string) => {
	try {
		await music.music(musicUrl);
		alert('노래가 신청되었습니다.');
	} catch (e: any) {
		e.message === 'Request failed with status code 409'
			? alert('이미 노래를 신청해 신청 하실 수 없습니다.')
			: alert(e);
	}
};

const returnBtn = (url: string, setUrl) => {
	const role = getCookie('role');
	if (role === 'admin') {
		return (
			<>
				<input
					name="link"
					placeholder="url을 입력하세요."
					type="text"
					onChange={({ target: { value } }) => setUrl(value)}
					disabled
				/>
				<p>사감 선생님은 노래신청을 하지 않으셔도 됩니다</p>
			</>
		);
	} else {
		return (
			<>
				<input
					name="link"
					placeholder="url을 입력하세요."
					type="text"
					onChange={({ target: { value } }) => setUrl(value)}
				/>
				<button
					onClick={() => {
						musicApply(url);
					}}
				>
					신청하기
				</button>
			</>
		);
	}
};

const SongRequest: React.FC = () => {
	const [url, setUrl] = useState<string>('');

	return (
		<S.Postioner>
			<label>기상음악 신청</label>
			<S.InputWrapper>
				<p>URL 주소</p>
				{returnBtn(url, setUrl)}
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
