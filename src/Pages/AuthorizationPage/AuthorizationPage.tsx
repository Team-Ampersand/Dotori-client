import React from 'react';
import { MatchType } from '../../Utils/GlobalType';
import PageTemplate from 'Pages/Template/PageTemplate';
import Authorization from '../../Components/Authorzation/Authorzation';

interface AuthorizationPageProps {
	match: MatchType;
}

const AuthorizationPage: React.FC<AuthorizationPageProps> = ({ match }) => {
	return (
		<PageTemplate match={match}>
			<Authorization />
		</PageTemplate>
	);
};

export default AuthorizationPage;
