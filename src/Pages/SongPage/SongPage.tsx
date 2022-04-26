import { setList } from 'Atoms';
import CheckMySong from 'Components/CheckMySong/CheckMySong';
import React from 'react';
import { useRecoilState } from 'recoil';
import { PageTemplate } from '..';
import { SongRequest, TodaySong, Sidebar } from '../../Components';
import * as S from './Style';

const SongPage = () => {
	const [songlist, setSongList] = useRecoilState(setList);
	return (
		<S.Positioner>
			<Sidebar />
			<PageTemplate>
				<TodaySong />
				<S.Container>
					<SongRequest />
					<CheckMySong songlists={songlist} />
				</S.Container>
			</PageTemplate>
		</S.Positioner>
	);
};

export default SongPage;
