import React, { useState } from 'react';
import * as S from "./Style";

const PenaltyBreakDown:React.FC = () => {
  return(
    <S.BreakDownContainer>
      <S.BreakDownWrapper>
        <S.Header>규정위반내역</S.Header>
        <S.Category>
          <S.LargeCategoriesWrapper>
            <S.LargeCategories>
              <S.TextWrapper>
                금지 물품 반입
              </S.TextWrapper>
            </S.LargeCategories>
            <S.LargeCategories>
              사감 지도 불이행
            </S.LargeCategories>
            <S.LargeCategories>
              시간 관 소홀 및 이탈 행위
            </S.LargeCategories>
            <S.LargeCategories>
              물품 훼손 및 절도
            </S.LargeCategories>
            <S.LargeCategories>
              취침 방해
            </S.LargeCategories>
            <S.LargeCategories>
              공동 생활 방해 및 위생 상태 불량
            </S.LargeCategories>
            <S.LargeCategories>
              애정 행위
            </S.LargeCategories>
            <S.LargeCategories>
              기숙사 출입금지 구역 출입
            </S.LargeCategories>
            <S.LargeCategories>
              학습실 면학분위기 저해
            </S.LargeCategories>
            <S.LargeCategories>
              외부인 출입 관여
            </S.LargeCategories>
          </S.LargeCategoriesWrapper>
          <S.SmallCategoriesWrapper>
            <S.SmallCategories>
              금지 물품 반입 20회 <S.DateWrapper>2022년 1월 22일</S.DateWrapper> 
            </S.SmallCategories>
            <S.SmallCategories>
              금지 물품 반입 20회 <S.DateWrapper>2022년 1월 22일</S.DateWrapper> 
            </S.SmallCategories>
            <S.SmallCategories>
              금지 물품 반입 20회 <S.DateWrapper>2022년 1월 22일</S.DateWrapper> 
            </S.SmallCategories>
          </S.SmallCategoriesWrapper>
        </S.Category>
      </S.BreakDownWrapper>
    </S.BreakDownContainer>
  )
};

export default PenaltyBreakDown;