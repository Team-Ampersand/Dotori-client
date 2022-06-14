import React, { useEffect, useState } from 'react';
import * as S from './Style';
import * as I from '../../Assets/Svg/index';
import axios from 'axios';
import { deleteMusic } from 'Api/music';
import { useDecode } from '../../Hooks/useDecode';
import {
	DateFormatter,
	showMusicDataFormatter,
} from '../../Utils/DateFormatter';
import { useRole } from 'Hooks/useRole';
import { toast } from 'react-toastify';
import { mutate } from 'swr';
import { useRecoilValue } from 'recoil';
import { showPlaylistDate } from 'Atoms';

type SongItemProps = {
	createdDate: Date;
	id: number;
	url: string;
	memberName: string;
	email: string;
	stuNum: string;
};

const songTitle = async (url: string) => {
	const api_key = process.env.REACT_APP_YOUTUBE_API_KEY;

	return axios.get(
		`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${url}&key=${api_key}`
	);
};

const youtube_parser = (url: string) => {
	const regExp =
		/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
	const match = url.match(regExp);
	if (match && match[7].length === 11) {
		return match[7];
	} else {
		return '';
	}
};

const DeleteMusic = async (id: number, role: string, playlistDate: string) => {
	await deleteMusic(role, id);
	toast.info('삭제 되었어요');
	mutate(`/${role}/music?date=${playlistDate}`);
};

const SongItem: React.FC<SongItemProps> = ({
	createdDate,
	id,
	url,
	memberName,
	email,
	stuNum,
}) => {
	const [title, setTitle] = useState('');
	const playlistDate = useRecoilValue(showPlaylistDate);
	const videoId = youtube_parser(url);
	const user = useDecode();
	const role = useRole();

	useEffect(() => {
		songTitle(videoId).then((res) => {
			setTitle(res?.data.items[0].snippet.title);
		});
	}, [videoId]);

	return (
		<S.Positioner href={url} target="_blank" rel="noreferrer">
			<S.ImgContainer>
				<S.Image
					src={`https://img.youtube.com/vi/${videoId}/sddefault.jpg`}
					alt="신청한 노래의 이미지입니다."
				/>
			</S.ImgContainer>
			<S.Container>
				<S.TitleContainer>{title}</S.TitleContainer>
				<S.AuthorContainer>
					{stuNum} {memberName}
				</S.AuthorContainer>
			</S.Container>
			<S.RightContainer>
				{role === 'admin' ||
				role === 'developer' ||
				role === 'councillor' ||
				email === user.sub ? (
					<S.DeleteContainer
						onClick={(e) => {
							e.preventDefault();
							window.confirm('삭제 하시겠습니까?')
								? DeleteMusic(id, role, playlistDate)
								: toast.info('삭제 하지 않았어요.');
						}}
					>
						<I.DeleteButton />
					</S.DeleteContainer>
				) : (
					''
				)}
				<S.DateContainer>{showMusicDataFormatter(createdDate)}</S.DateContainer>
			</S.RightContainer>
		</S.Positioner>
	);
};

export default SongItem;
