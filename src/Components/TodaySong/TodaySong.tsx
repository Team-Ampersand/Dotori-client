import React from 'react';
import * as S from './Style';
import { SongItem } from '../';


const TestSong = [
    {
        thumbnail: "https://img.youtube.com/vi/Ec7TN_11az8/hqdefault.jpg",
        title: "Stay",
        author: "임창규"
    },
    {
        thumbnail: "https://img.youtube.com/vi/JBfr9C6kIvE/hqdefault.jpg",
        title: "가을 안부",
        author: "김태민"
    },
    {
        thumbnail: "https://img.youtube.com/vi/83xBPCw5hh4/hqdefault.jpg",
        title: "Rockstar",
        author: "노경준"
    },
    {
        thumbnail: "https://img.youtube.com/vi/t3WB54UwCSc/hqdefault.jpg",
        title: "너의 이름은 ost 풀 사운드트랙 [고음질]",
        author: "배태현"
    },
    {
        thumbnail: "https://img.youtube.com/vi/83xBPCw5hh4/hqdefault.jpg",
        title: "Rockstar",
        author: "DaBaby"
    },
    {
        thumbnail: "https://img.youtube.com/vi/83xBPCw5hh4/hqdefault.jpg",
        title: "Rockstar",
        author: "DaBaby"
    },
    {
        thumbnail: "https://img.youtube.com/vi/83xBPCw5hh4/hqdefault.jpg",
        title: "Rockstar",
        author: "DaBaby"
    },
    {
        thumbnail: "https://img.youtube.com/vi/83xBPCw5hh4/hqdefault.jpg",
        title: "Rockstar",
        author: "DaBaby"
    }
]

const TodaySong: React.FC = () => {
    return (
        <S.Postioner>
            <S.PlaylistContainer>
                WEEK PLAYLIST
            </S.PlaylistContainer>
            <S.SongContainer>
                <SongItem songObj={TestSong} />
            </S.SongContainer>
        </S.Postioner>
    )
}

export default TodaySong;