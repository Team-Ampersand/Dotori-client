import React, { useEffect, useState } from 'react';
import * as S from './Style';
import { SongItem } from '../';
import music from 'Api/music';

type list = {
	id: number;
	url: string;
	username: string;
	createdDate: Date;
};

const musicLookup = async () => {
	try {
		const res = await music.musicLookup();
		return res;
	} catch (e) {
		alert(e);
	}
};

const todayMusic = async () => {
	try {
		const res = await music.todayMusic();
		return res;
	} catch (e) {
		alert(e);
	}
};

const TodaySong: React.FC = () => {
	const [all, setAll] = useState(true);
	const [today, setToday] = useState(false);
	const [list, setList] = useState<list[]>([]);
	useEffect(() => {
		musicLookup().then((res) => {
			setList(res?.data.data);
		});
	}, []);

	return (
		<S.Postioner>
			<S.PlaylistContainer>
				<h3>WEEK PLAYLIST</h3>
				<S.BtnWrapper>
					<S.AllWrapper
						onClick={() => {
							musicLookup().then((res) => {
								setList(res?.data.data);
								setAll(true);
								setToday(false);
							});
						}}
						isClicked={all}
					>
						전체
					</S.AllWrapper>
					<S.TodayWrapper
						onClick={() => {
							todayMusic().then((res) => {
								setList(res?.data.data);
								setAll(false);
								setToday(true);
							});
						}}
						isClicked={today}
					>
						오늘
					</S.TodayWrapper>
				</S.BtnWrapper>
			</S.PlaylistContainer>
			<S.SongContainer>
				{list &&
					[...list].reverse().map((data, ix) => {
						return <SongItem songObj={data} key={`${ix}`} />;
					})}
			</S.SongContainer>
		</S.Postioner>
	);
};

export default TodaySong;
