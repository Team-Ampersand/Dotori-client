import React from 'react';
import * as S from './Style';
import { PageTemplate } from '..';
import { MatchType } from '../../Utils/GlobalType';
import { SelfstudyTable, Classification, Sidebar } from '../../Components';

interface LaptopProps {
	match: MatchType;
}

const LaptopContainer: React.FC<LaptopProps> = ({ match }) => {
	return (
		<S.Positioner>
			<Sidebar />
			<PageTemplate match={match}>
				<S.Container>
					<Classification />
					<SelfstudyTable match={match} />
				</S.Container>
			</PageTemplate>
		</S.Positioner>
	);
};

export default LaptopContainer;
