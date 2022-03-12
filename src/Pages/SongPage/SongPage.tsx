import React from 'react';
import { PageTemplate } from '..';
import { SongRequest, TodaySong, Sidebar } from '../../Components';
import * as S from './Style';
import { useRecoilState } from 'recoil';
import { isCalendarOpen } from 'Atoms';

const SongPage: React.FC = () => {
	return (
		<S.Positioner>
			<Sidebar />
			<PageTemplate>
				<S.Container>
					<TodaySong />
					<SongRequest />
				</S.Container>
			</PageTemplate>
		</S.Positioner>
	);
};

export default SongPage;
