import React from 'react';
import * as S from './Style';
import TableHeader from './Header/Header';
import { MatchType } from '../../Utils/GlobalType'
import List from './List/List';

const TestUserObj = [
    {
        name : "권희준",
        grade: 2215,
    },
    {
        name : "권희준",
        grade: 2215,
    },
    {
        name : "권희준",
        grade: 2215,
    },
    {
        name : "권희준",
        grade: 2215,
    },
    {
        name : "권희준",
        grade: 2215,
    },
    {
        name : "권희준",
        grade: 2215,
    },
    {
        name : "권희준",
        grade: 2215,
    },
    {
        name : "권희준",
        grade: 2215,
    },
    {
        name : "권희준",
        grade: 2215,
    },
    {
        name : "권희준",
        grade: 2215,
    },
    {
        name : "권희준",
        grade: 2215,
    },
    {
        name : "권희준",
        grade: 2215,
    },
    {
        name : "권희준",
        grade: 2215,
    },
    {
        name : "권희준",
        grade: 2215,
    },
]

interface TableProps {
    match: MatchType
}

const SelfstudyTable : React.FC<TableProps> = ({ match }) => {
    return (
        <S.Postioner>
            <TableHeader match={match} />
            <S.Content>
                <List userObj={TestUserObj} match={match} />
            </S.Content>
        </S.Postioner>
    )
}

export default SelfstudyTable;
