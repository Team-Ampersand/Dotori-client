import React from 'react';
import * as S from './Style';
import { LoginForm } from '../../Components';

const SigninPage: React.FC = () => {
	return (
		<S.Positioner>
			<LoginForm />
		</S.Positioner>
	);
};

export default SigninPage;
