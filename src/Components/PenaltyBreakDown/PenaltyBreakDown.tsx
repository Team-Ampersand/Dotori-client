/* eslint-disable no-duplicate-case */
/* eslint-disable no-sequences */
import React, { useState, useEffect } from 'react';
import * as S from "./Style";
import LCategories from "./LargeCategories";
import SCategories from "./SmallCategories";

const items = LCategories.map(item => {
  return(
    <S.LargeCategories>
      <S.TextWrapper>
        {item.name}
      </S.TextWrapper>
  </S.LargeCategories>
  )
})

const Smallitems = SCategories.map(item => {
  console.log(item.data);
  switch (item.data) {
    case item.data:
      return (
        <>
          <S.SmallCategories>
            화기류 {item.data.FIREARMS.cnt > 0 ? item.data.FIREARMS.cnt : 0}회 <S.DateWrapper>{item.data.FIREARMS.date}</S.DateWrapper>
          </S.SmallCategories>
       </>
      );
    default:
      console.log("GIGIG");
      break;
  }
})

const PenaltyBreakDown:React.FC = () => {
  return(
    <S.BreakDownContainer>
      <S.BreakDownWrapper>
        <S.Header>규정위반내역</S.Header>
        <S.Category>
          <S.LargeCategoriesWrapper>
            {items}
          </S.LargeCategoriesWrapper>
          <S.SmallCategoriesWrapper>
            {Smallitems}
          </S.SmallCategoriesWrapper>
        </S.Category>
      </S.BreakDownWrapper>
    </S.BreakDownContainer>
  )
};

export default PenaltyBreakDown;