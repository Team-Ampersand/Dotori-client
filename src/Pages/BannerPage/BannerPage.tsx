import React from 'react';
import * as S from './Style';
import { BetaBanner, NotebookBanner, SongBanner } from '../../Components';
import { MatchType } from '../../Utils/GlobalType';

interface BannerProps {
    match: MatchType
}

const CompareBanner = (nowUrl: string) => {
    switch (nowUrl) {
        case '/laptop': return <NotebookBanner />
        case '/song': return <SongBanner />
        case '/notice': return;
        default: return <BetaBanner />
    }
}

const BannerContainer: React.FC<BannerProps> = ({ match }) => {
    return (
        <S.Postioner>
            {CompareBanner(match.path)}
        </S.Postioner>
    )
}

export default BannerContainer;