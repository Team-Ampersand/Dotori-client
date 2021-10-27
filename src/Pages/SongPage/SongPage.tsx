import React from 'react';
import { MatchType } from '../../Utils/GlobalType';
import { PageTemplate } from '..';
import { SongRequest, TodaySong, Sidebar } from '../../Components';
import * as S from './Style';

interface SongProps {
	match: MatchType;
}

type RequestSongPlayLoad = {
	music: string;
	singer: string;
	link: string;
};

const SongPage: React.FC<SongProps> = ({ match }) => {
	const onSubmit = (form: RequestSongPlayLoad) => {
		console.log(form);
	};

	return (
		<S.Positioner>
			<Sidebar />
			<PageTemplate match={match}>
				<S.Container>
					<TodaySong />
					<SongRequest onSubmit={onSubmit} />
				</S.Container>
			</PageTemplate>
		</S.Positioner>
	);
};

export default SongPage;
