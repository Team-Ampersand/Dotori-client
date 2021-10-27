import React from 'react';
import { MatchType } from '../../Utils/GlobalType';
import PageTemplate from 'Pages/Template/PageTemplate';
import Point from '../../Components/Point/Point';
import { Sidebar } from '../../Components';
import * as S from './Style';

interface PointProps {
	match: MatchType;
}

const PointPage: React.FC<PointProps> = ({ match }) => {
	return (
		<S.Positioner>
			<Sidebar />
			<PageTemplate match={match}>
				<Point />
			</PageTemplate>
		</S.Positioner>
	);
};

export default PointPage;
