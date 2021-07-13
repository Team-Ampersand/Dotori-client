import React from 'react';
import * as S from './Style';
import { MatchType } from '../../../Utils/GlobalType';
import { LaptopHeader } from './model/CombineAdminHeader';


interface HeaderProps {
    match: MatchType
}

const onlyCompareThisHeader = (match : MatchType) => {
    switch (match.path) {
        case "/laptop":
            return LaptopHeader
        default:
            break;
    }
}

const mappingAdminHeader = (match: MatchType) => 
    onlyCompareThisHeader(match)!.list.map(item => {
        return <div style={{ flex: item.flex }}>{item.label}</div>
    })


const Header : React.FC<HeaderProps> = ({ match }) => {
    return (
        <S.Postioner>
            {mappingAdminHeader(match)}
        </S.Postioner>
    )
}

export default Header;