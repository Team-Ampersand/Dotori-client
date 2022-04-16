import React, { useEffect, useRef, useState } from 'react';
import * as S from './Style';
import { music } from 'Api/music';
import { ManufactureDate } from 'Utils/ManufactureDate';
import 'react-calendar/dist/Calendar.css';
import { useRole } from 'Hooks/useRole';
import { toast } from 'react-toastify';

const musicApply = async (musicUrl: string, role: string) => {
	await music(role, musicUrl);
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
								toast.warning('아무것도 입력하지 않았어요');
							} else if (CheckUrl(url)) {
								musicApply(url, role).then(() => {
									window.location.reload();
									toast.success('기상 음악이 신청 되었어요');
								});
							} else {
								toast.warning('유튜브 링크만 추가하실 수 있어요');
							}
						}
					}}
				/>
				<button
					onClick={() => {
						if (url === '') {
							toast.warning('아무것도 입력하지 않았어요');
						} else if (CheckUrl(url)) {
							musicApply(url, role).then(() => {
								window.location.reload();
								toast.success('기상 음악이 신청 되었어요');
							});
						} else {
							toast.warning('유튜브 링크만 추가하실 수 있어요');
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
			<label>※ 음악 신청 시 공지사항</label>
			<S.TextContainer>
				<p>
					1. 기상 음악 순서는 신청 순서와는 별개로 사감선생님께서 정하십니다.
				</p>
				<p>
					2. 영어, 한국어 이외의 언어가 포함되거나 과도한 욕설이 담긴 음악은
					삭제될 수 있습니다.
				</p>
				<p>3. 기상 음악과 관련 없는 영상을 올렸을 시 삭제될 수 있습니다.</p>
				<p>4. 노래 신청은 1일 1곡만 가능합니다.</p>
				<p>5. 노래 신청은 취소 후 재신청이 가능합니다.</p>
				<hr />
			</S.TextContainer>

			<S.InputWrapper>
				<p>기상음악 신청</p>
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
