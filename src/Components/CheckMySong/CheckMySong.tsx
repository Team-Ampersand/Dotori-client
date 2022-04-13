import { setList } from 'Atoms';
import SongItem from 'Components/SongItem/SongItem';
import { useDecode } from 'Hooks/useDecode';
import React from 'react';
import { useRecoilState } from 'recoil';
import * as S from './Style';

type MySongObj = {
	email: string;
};

interface MySongProps {
	songObj: MySongObj;
}

interface CheckMySongProps {
	songlists: any;
}

const CheckMySong: React.FC<CheckMySongProps> = ({ songlists }) => {
	const user = useDecode();
	const [songlist, setSongList] = useRecoilState(setList);
	return (
		<S.Positioner>
			<label>내가 오늘 신청한 음악이에요 😉</label>
			<S.SongContainer>
				{songlist
					.filter((data) => data.email === user.sub)
					.map((item, idx) => {
						return item.email.includes(user.sub) ? (
							<SongItem songObj={item} key={`${idx}`} />
						) : (
							<p>오늘 음악 신청을 안 하셨네요 ! </p>
						);
					})}
			</S.SongContainer>
		</S.Positioner>
	);
};

export default CheckMySong;
