import React from 'react';
import { IilustBeta } from '../../../Assets/Svg';
import * as S from '../BannerStyle';

const BetaBanner: React.FC = () => {
    return (
        <S.Postioner>
            <S.TextWrapper>
                <h2>Beta 서비스 중입니다.</h2>
                <span>정식 서비스 : 2020년 1학기 예정</span>
            </S.TextWrapper>
            <S.IlustWrapper>
                <IilustBeta />
            </S.IlustWrapper>
        </S.Postioner>
    )
}

export default BetaBanner;