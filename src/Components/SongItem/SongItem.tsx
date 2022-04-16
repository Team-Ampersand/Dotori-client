import React, { useEffect, useState } from 'react';
import * as S from './Style';
import * as I from '../../Assets/Svg/index';
import axios from 'axios';
import { deleteMusic } from 'Api/music';
import { useDecode } from '../../Hooks/useDecode';
import { showMusicDataFormatter } from '../../Utils/DateFormatter';
import { useRole } from 'Hooks/useRole';
import { toast } from 'react-toastify';

type SongItemObj = {
	createdDate: Date;
	id: number;
	url: string;
	memberName: string;
	email: string;
};
interface SongProps {
	songObj: SongItemObj;
}

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

const DeleteMusic = async (id: number, role: string) => {
	await deleteMusic(role, id);
	toast.info('삭제 되었어요');
	window.location.reload();
};

const SongItem: React.FC<SongProps> = ({ songObj }) => {
	const [title, setTitle] = useState('');
	const videoId = youtube_parser(songObj.url);
	const user = useDecode();
	const role = useRole();

	useEffect(() => {
		songTitle(videoId).then((res) => {
			setTitle(res?.data.items[0].snippet.title);
		});
	}, [videoId]);

	return (
		<S.Positioner href={songObj.url} target="_blank" rel="noreferrer">
			<S.ImgContainer thumbnail={videoId} />
			<S.Container>
				<S.TitleContainer>{title}</S.TitleContainer>
				<S.AuthorContainer>{songObj.memberName}</S.AuthorContainer>
			</S.Container>
			<S.DateContainer>
				{showMusicDataFormatter(songObj.createdDate)}
			</S.DateContainer>
			{role === 'admin' ||
			role === 'developer' ||
			role === 'councillor' ||
			songObj.email === user.sub ? (
				<S.DeleteContainer
					onClick={(e) => {
						e.preventDefault();
						window.confirm('삭제 하시겠습니까?')
							? DeleteMusic(songObj.id, role)
							: toast.info('삭제 하지 않았어요.');
					}}
				>
					<I.DeleteButton />
				</S.DeleteContainer>
			) : (
				''
			)}
		</S.Positioner>
	);
};

export default SongItem;
