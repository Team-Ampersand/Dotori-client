import React from 'react';
import { MatchType } from '../../Utils/GlobalType';
import { PageTemplate } from '..';
import { SongRequest, TodaySong } from '../../Components';
import * as S from './Style';

interface SongProps {
    match: MatchType
}

type RequestSongPlayLoad = {
    music: string;
    singer: string;
    link: string;
}

const SongPage: React.FC<SongProps> = ({ match }) => {

    const onSubmit = (form : RequestSongPlayLoad) => {
        console.log(form);
    }

    return (
        <PageTemplate match={match}>
            <S.Positioner>
                <TodaySong />
                <SongRequest onSubmit={onSubmit} />
            </S.Positioner>
        </PageTemplate>
    );
}

export default SongPage;