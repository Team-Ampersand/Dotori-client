import React from 'react';
import * as S from './Style';
import { BetaBanner, NotebookBanner } from '../../Components';

interface BannerProps {
    nowUrl: string
}

const BannerContainer : React.FC<BannerProps> = ({ nowUrl }) => {
    return (
        <S.Postioner>
            {nowUrl === "/laptop" ? <NotebookBanner /> : <BetaBanner />}
        </S.Postioner>
    )
}

export default BannerContainer;