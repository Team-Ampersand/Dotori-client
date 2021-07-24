import React from 'react';
import * as S from './Style';
import { Logout, Point, User } from '../../Assets/Svg';
import { EventList } from '..';

type UserProfileType = {
    name: string,
    grade: string,
    class: string
}

interface ProfileProps {
    logoutFunc: () => void,
    userProfile: UserProfileType
}

const SampleData = {
    laptop: {
        laptopRoom: "LAB 4실",
        laptopSeat: "12"
    },
    song: {
        songAuthor: "아이유",
        songName: "Blueming",
        arriTime: "7:30 ~ 7:35",
        thumbnailKey: "D1PvIWdJ8xo"
    }
}

const UserProfile: React.FC<ProfileProps> = ({ logoutFunc, userProfile }) => {
    return (
        <S.Postioner>
            <S.Header>
                <S.LogoutWrapper onClick={logoutFunc} data-test="test-logout">
                    <Logout />
                    <span>로그아웃</span>
                </S.LogoutWrapper>
            </S.Header>
            <S.Content>
                <S.UserWrapper>
                    <User />
                    <div>
                        <span className="name">{userProfile.name}</span>
                        <span className="grade">{userProfile.grade}-{userProfile.class}</span>
                    </div>
                </S.UserWrapper>
                <S.PointWrapper>
                    <Point />
                    <span>상벌점</span>
                    <S.PointProgress>
                        <S.ActiveProgress />
                    </S.PointProgress>
                    <sub>-5</sub>
                </S.PointWrapper>
            </S.Content>
            <S.Footer>
                <S.Label>나의 이벤트</S.Label>
                <EventList eventObject={SampleData}/>
            </S.Footer>
            <S.Policy>
                <span>© 2021 Ampersand. All Rights Reserved.</span>
                <p>
                    <a href="#" target="_blank"><strong>About</strong></a> | 
                    <a href="https://github.com/Team-Ampersand/Dotori-client/blob/master/LICENSE" target="_blank"><strong> License</strong></a> | 
                    <a href="https://github.com/Team-Ampersand" target="_blank"><strong> Github and issue</strong></a>
                </p>
            </S.Policy>
        </S.Postioner>
    )
}

export default UserProfile;