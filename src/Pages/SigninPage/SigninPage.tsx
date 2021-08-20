import React from 'react';
import { MatchType } from 'Utils/GlobalType';
import * as S from './Style';
import { LoginForm } from "../../Components"

interface signinProps{
    match: MatchType
}

const SigninPage: React.FC<signinProps> = ({ match }) => {
    return (
        <S.Positioner>
            <LoginForm />
        </S.Positioner>
    )
}

export default SigninPage
