import React, { useEffect, useRef, useState } from 'react';
import * as S from './Style';
import { music } from 'Api/music';
import { ManufactureDate } from 'Utils/ManufactureDate';
import 'react-calendar/dist/Calendar.css';
import { useRole } from 'Hooks/useRole';

const musicApply = async (musicUrl: string, role: string) => {
	try {
		await music(role, musicUrl);
		alert('노래가 신청되었어요');
	} catch (e: any) {
		if (e.message === 'Request failed with status code 409') {
			alert('이미 노래를 신청 해 신청 하실 수 없어요');
		}
	}
};

const returnBtn = (
	url: string,
	setUrl: { (value: React.SetStateAction<string>): void; (arg0: string): void },
	songInput: React.LegacyRef<HTMLInputElement> | undefined,
	role: string
) => {
	const today = ManufactureDate('W');
	let cant = ['금', '토'];
	if (role === 'admin') {
		return (
			<>
				<input
					name="link"
					placeholder="url을 입력하세요"
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
					placeholder="url을 입력하세요"
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
					placeholder="url을 입력하세요"
					type="text"
					onChange={({ target: { value } }) => setUrl(value)}
					ref={songInput}
					onKeyPress={(e) => {
						if (e.key === 'Enter') {
							if (url === '') {
								alert('아무것도 입력하지 않았어요');
							} else if (CheckUrl(url)) {
								musicApply(url, role).then(() => {
									window.location.reload();
								});
							} else {
								alert('유튜브 링크만 추가하실 수 있어요');
							}
						}
					}}
				/>
				<button
					onClick={() => {
						if (url === '') {
							alert('아무것도 입력하지 않았어요');
						} else if (CheckUrl(url)) {
							musicApply(url, role).then(() => {
								window.location.reload();
							});
						} else {
							alert('유튜브 링크만 추가하실 수 있어요');
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
	const role = useRole();

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
				{returnBtn(url, setUrl, songInput, role)}
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
