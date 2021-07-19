import React from 'react';
import * as S from './Style';
import { MatchType } from '../../../Utils/GlobalType';
import { LaptopHeader, SongHeader } from './model/CombineAdminHeader';


interface HeaderProps {
    match: MatchType
}

const onlyCompareThisHeader = (match : MatchType) => {
    switch (match.path) {
        case "/laptop":
            return LaptopHeader
        case "/song":
            return SongHeader
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
        <>
            {match.path == "/laptop" ? <S.Postioner>{mappingAdminHeader(match)}</S.Postioner> : <S.SongPostioner>{mappingAdminHeader(match)}
            </S.SongPostioner>}
        </>
    )
}

export default Header;