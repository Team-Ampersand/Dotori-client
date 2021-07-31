import React from 'react';
import { MatchType } from 'Utils/GlobalType';
import * as S from './Style';

interface signinProps{
    match: MatchType
}

const SigninPage: React.FC<signinProps> = ({ match }) => {
    return (
        <S.Positioner></S.Positioner>
    )
}

export default SigninPage
