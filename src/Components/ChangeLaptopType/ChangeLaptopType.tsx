import React, { useState } from 'react';
import * as S from './Style';

interface ChangeLaptopTypeProps {
    active: boolean;
    setActive: (value : boolean) => void;
}

const ChangeLaptopType: React.FC<ChangeLaptopTypeProps> = ({ active, setActive }) => {
    return (
        <S.Postioner onClick={() => setActive(!active)} isActive={active}>
            <span>{active ? '대여 신청' : '대여대장 열람'}</span>
        </S.Postioner>
    )
}

export default ChangeLaptopType;