import React from 'react';
import * as S from './Style';
import { PageTemplate } from '..';
import { SelfstudyTable, Sidebar } from '../../Components';

const SelfStudyPage: React.FC = () => {
	return (
		<S.Positioner>
			<Sidebar />
			<PageTemplate>
				<S.Container>
					<SelfstudyTable />
				</S.Container>
			</PageTemplate>
		</S.Positioner>
	);
};

export default SelfStudyPage;
