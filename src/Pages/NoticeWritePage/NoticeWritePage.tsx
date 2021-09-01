import React from 'react';
import { MatchType } from '../../Utils/GlobalType';
import PageTemplate from 'Pages/Template/PageTemplate';
import { NoticeWrite } from '../../Components';
import * as S from './Style';

interface NoticeWriteProps {
	match: MatchType;
}

const returnAuthorColor = (authorType: string) => {
	switch (authorType) {
		case 'teacher':
			return '#7D78D1';
		case 'student':
			return '#FF8C8C';
	}
};

const NoticeWritePage: React.FC<NoticeWriteProps> = ({ match }) => {
	let i = 1;
	let author = 'teacher';

	return (
		<PageTemplate match={match}>
			<NoticeWrite
				board_key={i}
				authorColor={returnAuthorColor(author)!}
				writeMode={'create'}
			/>
		</PageTemplate>
	);
};

export default NoticeWritePage;
