import React from 'react';
import { MatchType } from '../../Utils/GlobalType';
import { PageTemplate } from '..';
import { SongRequest, TodaySong } from '../../Components';

type RequestSongPayload = {
    music: string;
    singer: string;
    link: string;
}

interface SongProps {
    match: MatchType
}

const SongPage: React.FC<SongProps> = ({ match }) => {

    const onSubmit = (form : RequestSongPayload) => {
        console.log(form);
    }

    return (
        <PageTemplate match={match}>
            <TodaySong />
            <SongRequest onSubmit={onSubmit} />
        </PageTemplate>
    );
}

export default SongPage;