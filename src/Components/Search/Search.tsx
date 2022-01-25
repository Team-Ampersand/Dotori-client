import React from 'react';
import * as S from "./Style";

const Search:React.FC = () => {
    return(
        <S.SelectBoxWrapper pattern='\d*' placeholder="이름을 검색해주세요" />
    )
}

export default Search;