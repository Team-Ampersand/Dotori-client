import React from 'react';
import { MatchType } from '../../Utils/GlobalType';
import { PageTemplate } from '..';
import { SongRequest, TodaySong, Sidebar } from '../../Components';
import * as S from './Style';

interface SongProps {
	match: MatchType;
}

const SongPage: React.FC<SongProps> = ({ match }) => {
	return (
		<S.Positioner>
			<Sidebar />
			<PageTemplate match={match}>
				<S.Container>
					<TodaySong />
					<SongRequest />
				</S.Container>
			</PageTemplate>
		</S.Positioner>
	);
};

export default SongPage;
