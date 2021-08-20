import React from 'react';
import { IllustSong } from '../../../Assets/Svg';
import * as S from '../BannerStyle';

const SongBanner: React.FC = () => {
    return (
        <S.Postioner>
            <S.TextWrapper>
                <h2>자신이 듣고 싶은 음악을 마음껏 신청하세요.</h2>
            </S.TextWrapper>
            <S.IlustWrapper>
                <IllustSong />
            </S.IlustWrapper>
        </S.Postioner>
    )
}

export default SongBanner;