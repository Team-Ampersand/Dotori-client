import CheckMySong from 'Components/CheckMySong/CheckMySong';
import React from 'react';
import { PageTemplate } from '..';
import { SongRequest, TodaySong, Sidebar } from '../../Components';
import * as S from './Style';

const SongPage = () => {
	return (
		<S.Positioner>
			<Sidebar />
			<PageTemplate>
				<TodaySong />
			</PageTemplate>
		</S.Positioner>
	);
};

export default SongPage;
