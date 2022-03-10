import React from 'react';
import PageTemplate from 'Pages/Template/PageTemplate';
import Authorization from '../../Components/Authorzation/Authorzation';
import { Sidebar } from '../../Components';
import * as S from './Style';


const AuthorizationPage: React.FC = () => {
	return (
		<S.Positioner>
			<Sidebar />
			<PageTemplate>
				<Authorization />
			</PageTemplate>
		</S.Positioner>
	);
};

export default AuthorizationPage;
