import React, { useEffect, useRef, useState } from 'react';
import * as S from './Style';
import music from 'Api/music';
import { getCookie } from 'Utils/Cookie';
import { ManufactureDate } from 'Utils/ManufactureDate';

const musicApply = async (musicUrl: string) => {
	try {
		await music.music(musicUrl);
		alert('노래가 신청되었습니다.');
	} catch (e: any) {
		e.message === 'Request failed with status code 409'
			? alert('이미 노래를 신청 해 신청 하실 수 없습니다.')
			: alert(e);
	}
};

const returnBtn = (
	url: string,
	setUrl: { (value: React.SetStateAction<string>): void; (arg0: string): void },
	songInput: React.LegacyRef<HTMLInputElement> | undefined
) => {
	const today = ManufactureDate('W');
	let can = ['월', '화', '수', '목', '일'];
	let cant = ['금', '토'];
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
	} else if (cant.indexOf(today) !== -1) {
		console.log(cant.indexOf(today));
		return (
			<>
				<input
					name="link"
					placeholder="url을 입력하세요."
					type="text"
					disabled
				/>
				<button>신청불가</button>
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
					ref={songInput}
					onKeyPress={(e) => {
						if (e.key === 'Enter') {
							if (url === '') {
								alert('아무것도 입력하지 않았습니다.');
							} else if (CheckUrl(url)) {
								musicApply(url).then(() => {
									window.location.reload();
								});
							} else {
								alert('유튜브 링크만 추가하실 수 있습니다.');
							}
						}
					}}
				/>
				<button
					onClick={() => {
						if (url === '') {
							alert('아무것도 입력하지 않았습니다.');
						} else if (CheckUrl(url)) {
							musicApply(url).then(() => {
								window.location.reload();
							});
						} else {
							alert('유튜브 링크만 추가하실 수 있습니다.');
						}
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

	const songInput = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (songInput.current) {
			songInput.current.focus();
		}
	});

	return (
		<S.Postioner>
			<label>기상음악 신청</label>
			<S.InputWrapper>
				<p>URL 주소</p>
				{returnBtn(url, setUrl, songInput)}
			</S.InputWrapper>
		</S.Postioner>
	);
};

export const CheckUrl = (url) => {
	let regex =
		/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/;
	return regex.test(url);
};

export default SongRequest;
