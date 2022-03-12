import React from 'react';
import * as S from './Style';
import PageTemplate from 'Pages/Template/PageTemplate';
import { Penalty, Sidebar } from '../../Components';

const PenaltyPage: React.FC = () => {
	return (
		<S.Positioner>
			<Sidebar />
			<PageTemplate>
				<Penalty />
			</PageTemplate>
		</S.Positioner>
	);
};

export default PenaltyPage;
