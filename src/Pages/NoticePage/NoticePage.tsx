import React from 'react';
import PageTemplate from 'Pages/Template/PageTemplate';
import { NoticeBoard, Sidebar } from '../../Components';
import * as S from './Style';

const NoticePage: React.FC = () => {
	return (
		<S.Positioner>
			<Sidebar />
			<PageTemplate>
				<NoticeBoard />
			</PageTemplate>
		</S.Positioner>
	);
};

export default NoticePage;
