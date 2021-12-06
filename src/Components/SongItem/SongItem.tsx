import React, { useEffect, useState } from 'react';
import * as S from './Style';
import axios from 'axios';
import { rolelookup } from 'Utils/Libs/roleLookup';
import music from 'Api/music';

type SongItemObj = {
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

const SongItem: React.FC<SongProps> = ({ songObj }) => {
	const [title, setTitle] = useState('');
	const [role, setRole] = useState('');
	const videoId = youtube_parser(songObj.url);

	const returnRole = async () => {
		setRole(await rolelookup());
	};

	useEffect(() => {
		songTitle(videoId).then((res) => {
			setTitle(res?.data.items[0].snippet.title);
		});
		returnRole();
	}, [videoId]);

	return (
		<S.Positioner>
			<S.ImgContainer thumbnail={videoId} />
			<S.Container>
				<S.TitleContainer>
					<a href={songObj.url} target="_blank" rel="noreferrer">
						{title}
					</a>
				</S.TitleContainer>
				<S.AuthorContainer>{songObj.username}</S.AuthorContainer>
			</S.Container>
			{role === 'member' ? (
				''
			) : (
				<S.DeleteContainer
					onClick={() => {
						deleteMusic(songObj.id);
					}}
				>
					❌
				</S.DeleteContainer>
			)}
		</S.Positioner>
	);
};

export default SongItem;
