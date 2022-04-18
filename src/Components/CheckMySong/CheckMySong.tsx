import { dateMusic } from 'Api/music';
import { setList, showPlaylistDate } from 'Atoms';
import SongItem from 'Components/SongItem/SongItem';
import { useDecode } from 'Hooks/useDecode';
import { useRole } from 'Hooks/useRole';
import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import useSWR, { mutate } from 'swr';
import { DateFormatter } from 'Utils/DateFormatter';
import { apiClient } from 'Utils/Libs/apiClient';
import { MusicController } from 'Utils/Libs/requestUrls';
import * as S from './Style';

type MySongObj = {
	email: string;
};

interface MusicType {
	data: {
		data: [
			{
				createdDate: Date;
				email: string;
				id: number;
				memberName: string;
				url: string;
			}
		];
	};
}

interface MusicData {
	createdDate: Date;
	email: string;
	id: number;
	memberName: string;
	url: string;
}
interface CheckMySongProps {
	songlists: any;
}

const CheckMySong: React.FC<CheckMySongProps> = ({ songlists }) => {
	const user = useDecode();
	const role = useRole();
	const playlistDate = useRecoilValue(showPlaylistDate);
	const { data, error } = useSWR<MusicType>(
		MusicController.dateMusic(role, playlistDate),
		apiClient.get
	);

	const filterCheck = (data: MusicData[]) => {
		if (!data) return false;
		else if (data.filter((data) => data.email === user.sub).length > 0)
			return true;
		else return false;
	};

	useEffect(() => {
		mutate(`/${role}/music?date=${playlistDate}`);
	}, []);

	if (!data) return <div />;
	if (error) return <div></div>;

	return (
		<S.Positioner>
			<label>내가 오늘 신청한 음악이에요</label>
			<S.SongContainer>
				{filterCheck(data.data.data) ? (
					data.data.data
						.filter((data) => data.email === user.sub)
						.map((item, idx) => {
							return (
								<SongItem
									id={item.id}
									url={item.url}
									createdDate={item.createdDate}
									memberName={item.memberName}
									email={item.email}
									key={`${idx}`}
								/>
							);
						})
				) : (
					<p>오늘은 음악 신청을 안 하셨네요!</p>
				)}
			</S.SongContainer>
		</S.Positioner>
	);
};

export default CheckMySong;
