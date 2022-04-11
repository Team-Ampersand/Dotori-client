import React from 'react';
import * as S from './Style';

interface TagProps {
    children: React.ReactNode;
}

const PenaltyGiveTagItem: React.FC<TagProps> = ({ children }) => {
    return <S.Tag>{children}</S.Tag>
}

export default PenaltyGiveTagItem;