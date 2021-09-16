import React from 'react';
import * as S from './Style';
import TableHeader from './Header/Header';
import { MatchType } from '../../Utils/GlobalType'
import List from './List/List';

const TestUserObj = [
    {
        name : "강산하",
        grade: 2201,
    },
    {
        name : "강정원",
        grade: 2202,
    },
    {
        name : "김민지",
        grade: 2203,
    },
    {
        name : "김유진",
        grade: 2204,
    },
    {
        name : "김태빈",
        grade: 2205,
    },
    {
        name : "노경준",
        grade: 2206,
    },
    {
        name : "박민혁",
        grade: 2207,
    },
    {
        name : "박선우",
        grade: 2208,
    },
    {
        name : "박준서",
        grade: 2209,
    },
    {
        name : "백다미",
        grade: 2210,
    },
    {
        name : "서유션",
        grade: 2211,
    },
    {
        name : "송시현",
        grade: 2212,
    },
    {
        name : "양하준",
        grade: 2213,
    },
    {
        name : "이선우",
        grade: 2214,
    },
    {
        name : "임창규",
        grade: 2215,
    },
    {
        name : "전지환",
        grade: 2216,
    },
    {
        name : "정영민",
        grade: 2217,
    },
    {
        name : "지인호",
        grade: 2218,
    },
    {
        name : "한재원",
        grade: 2219,
    },
    {
        name : "현채원",
        grade: 2220,
    },
]

interface TableProps {
    match: MatchType
}

const SelfstudyTable : React.FC<TableProps> = ({ match }) => {
    return (
        <S.Postioner>
            {/* <TableHeader match={match} /> */}
            <S.Content>
                <List userObj={TestUserObj} match={match} />
            </S.Content>
        </S.Postioner>
    )
}

export default SelfstudyTable;
