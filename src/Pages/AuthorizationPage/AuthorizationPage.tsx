import React from 'react';
import { MatchType } from '../../Utils/GlobalType';
import PageTemplate from 'Pages/Template/PageTemplate';
import Authorization from '../../Components/Authorzation/Authorzation';
import { Sidebar } from '../../Components';
import * as S from './Style';

interface AuthorizationPageProps {
	match: MatchType;
}

const AuthorizationPage: React.FC<AuthorizationPageProps> = ({ match }) => {
	return (
		<S.Positioner>
			<Sidebar />
			<PageTemplate match={match}>
				<Authorization />
			</PageTemplate>
		</S.Positioner>
	);
};

export default AuthorizationPage;
