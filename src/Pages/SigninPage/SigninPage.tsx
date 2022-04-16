import React from 'react';
import * as S from './Style';
import { SigninForm } from '../../Components';

const SigninPage: React.FC = () => {
	return (
		<S.Positioner>
			<SigninForm />
		</S.Positioner>
	);
};

export default SigninPage;
