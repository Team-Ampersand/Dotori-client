import React from 'react';
import { MatchType } from '../../Utils/GlobalType';
import PageTemplate from 'Pages/Template/PageTemplate';
import { NoticeBoard, Sidebar } from '../../Components';
import * as S from './Style';

interface NoticeProps {
	match: MatchType;
}

const NoticePage: React.FC<NoticeProps> = ({ match }) => {
	return (
		<S.Positioner>
			<Sidebar />
			<PageTemplate match={match}>
				<NoticeBoard />
			</PageTemplate>
		</S.Positioner>
	);
};

export default NoticePage;
