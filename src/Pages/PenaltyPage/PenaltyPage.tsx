import React from 'react';
import * as S from './Style';
import { MatchType } from '../../Utils/GlobalType';
import PageTemplate from 'Pages/Template/PageTemplate';
import { Penalty, Sidebar } from '../../Components';

interface PenaltyPageProps {
	match: MatchType;
}

const PenaltyPage: React.FC<PenaltyPageProps> = ({ match }) => {
	return (
		<S.Positioner>
			<Sidebar />
			<PageTemplate match={match}>
				<Penalty />
			</PageTemplate>
		</S.Positioner>
	);
};

export default PenaltyPage;