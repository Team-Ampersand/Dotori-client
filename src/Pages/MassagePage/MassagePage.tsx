import React from 'react';
import * as S from './Style';
import { PageTemplate } from 'Pages';
import { Sidebar, MassageTable } from 'Components';

const MassagePage: React.FC = () => {
	return (
		<S.Positioner>
			<Sidebar />
			<PageTemplate>
				<MassageTable />
			</PageTemplate>
		</S.Positioner>
	);
};

export default MassagePage;
