import React, { useEffect, useState } from 'react';
import * as S from './Style';
import axios from 'axios';
import music from 'Api/music';
import { getCookie } from 'Utils/Cookie';

type SongItemObj = {
	createdDate: Date;
	id: number;
	url: string;
	username: string;
};
interface SongProps {
	songObj: SongItemObj;
}

const songTitle = async (url: string) => {
	const api_key = 'AIzaSyAIOlx_Ohakvd1tmJjr-dLHap_aBYMEuyE';
	try {
		return axios.get(
			`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${url}&key=${api_key}`
		);
	} catch (e) {
		alert(e);
	}
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

const deleteMusic = async (id: number) => {
	try {
		await music.deleteMusic(id);
		alert('삭제 되었습니다.');
		window.location.reload();
	} catch (e) {
		alert(e);
	}
};
const leftPad = (value) => {
	if (value >= 10) {
		return value;
	}
	return `0${value}`;
};

const dateFormat = (createdDate: Date) => {
	const date = new Date(createdDate);
	const year = date.getFullYear();
	const month = leftPad(date.getMonth() + 1);
	const day = leftPad(date.getDate());
	return [year, month, day].join('-');
};

const SongItem: React.FC<SongProps> = ({ songObj }) => {
	const [title, setTitle] = useState('');
	const videoId = youtube_parser(songObj.url);
	const role = localStorage.getItem('role');

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
				<S.AuthorContainer>{songObj.username}</S.AuthorContainer>
				<S.AuthorContainer>{dateFormat(songObj.createdDate)}</S.AuthorContainer>
			</S.Container>
			{role === 'member' ? (
				''
			) : (
				<S.DeleteContainer
					onClick={(e) => {
						e.preventDefault();
						window.confirm('삭제 하시겠습니까?')
							? deleteMusic(songObj.id)
							: alert('삭제 하지 않았어요.');
					}}
				>
					❌
				</S.DeleteContainer>
			)}
		</S.Positioner>
	);
};

export default SongItem;
