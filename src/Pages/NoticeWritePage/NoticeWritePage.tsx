import React from 'react';
import { MatchType } from '../../Utils/GlobalType';
import PageTemplate from 'Pages/Template/PageTemplate';
import { NoticeWrite } from '../../Components';

interface NoticeWriteProps {
	match: MatchType;
}

const NoticeWritePage: React.FC<NoticeWriteProps> = ({ match }) => {
	return (
		<PageTemplate match={match}>
			<NoticeWrite />
		</PageTemplate>
	);
};

export default NoticeWritePage;
