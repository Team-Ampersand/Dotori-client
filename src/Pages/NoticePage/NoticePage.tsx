import React from 'react';
import { MatchType } from '../../Utils/GlobalType';
import PageTemplate from 'Pages/Template/PageTemplate';
import { NoticeBoard } from '../../Components';
import * as S from './Style';

interface NoticeProps {
	match: MatchType;
}

const NoticePage: React.FC<NoticeProps> = ({ match }) => {
	return (
		<PageTemplate match={match}>
			<NoticeBoard />
		</PageTemplate>
	);
};

export default NoticePage;
