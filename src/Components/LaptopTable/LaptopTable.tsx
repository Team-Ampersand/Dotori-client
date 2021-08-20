import React from 'react';
import * as S from './Style';
import TableHeader from './Header/Header';
import { MatchType } from '../../Utils/GlobalType'
import List from './List/List';

const TestUserObj = [
    {
        name : "권희준",
        grade: 2,
        class : 3,
        num: 3,
        laptopRoom: 'LAB1',
        seat: 2,
        status: true,
        bringTime: '19:53'
    },
    {
        name : "권희준",
        grade: 2,
        class : 3,
        num: 3,
        laptopRoom: 'LAB1',
        seat: 2,
        status: false,
        bringTime: '19:53'
    },
    {
        name : "권희준",
        grade: 2,
        class : 3,
        num: 3,
        laptopRoom: 'LAB1',
        seat: 2,
        status: true,
        bringTime: '19:53'
    },
    {
        name : "권희준",
        grade: 2,
        class : 3,
        num: 3,
        laptopRoom: 'LAB1',
        seat: 2,
        status: false,
        bringTime: '19:53'
    },
    {
        name : "권희준",
        grade: 2,
        class : 3,
        num: 3,
        laptopRoom: 'LAB1',
        seat: 2,
        status: true,
        bringTime: '19:53'
    },
    {
        name : "권희준",
        grade: 2,
        class : 3,
        num: 3,
        laptopRoom: 'LAB1',
        seat: 2,
        status: false,
        bringTime: '19:53'
    },
    {
        name : "권희준",
        grade: 2,
        class : 3,
        num: 3,
        laptopRoom: 'LAB1',
        seat: 2,
        status: true,
        bringTime: '19:53'
    },
    {
        name : "권희준",
        grade: 2,
        class : 3,
        num: 3,
        laptopRoom: 'LAB1',
        seat: 2,
        status: false,
        bringTime: '19:53'
    },
    {
        name : "권희준",
        grade: 2,
        class : 3,
        num: 3,
        laptopRoom: 'LAB1',
        seat: 2,
        status: true,
        bringTime: '19:53'
    },
]

interface TableProps {
    match: MatchType
}

const LaptopTable : React.FC<TableProps> = ({ match }) => {
    return (
        <S.Postioner>
            <TableHeader match={match} />
            <S.Content>
                <List userObj={TestUserObj} match={match} />
            </S.Content>
        </S.Postioner>
    )
}

export default LaptopTable;
