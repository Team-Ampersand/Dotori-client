import React from 'react';
import * as S from './Style';
import { MatchType } from 'Utils/GlobalType';
import { PageTemplate } from 'Pages';
import { Sidebar, MassageTable } from 'Components';

interface MassageProps {
	match: MatchType;
}

const MassagePage: React.FC<MassageProps> = ({ match }) => {
	return (
		<S.Positioner>
			<Sidebar />
			<PageTemplate match={match}>
				<MassageTable />
			</PageTemplate>
		</S.Positioner>
	);
};

export default MassagePage;
