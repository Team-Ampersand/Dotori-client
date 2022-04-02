import React from 'react';
import PageTemplate from 'Pages/Template/PageTemplate';
import { NoticeWrite, Sidebar } from '../../Components';
import * as S from './Style';

const NoticeWritePage: React.FC = () => {
	return (
		<S.Positioner>
			<Sidebar />
			<PageTemplate>
				<NoticeWrite />
			</PageTemplate>
		</S.Positioner>
	);
};

export default NoticeWritePage;
