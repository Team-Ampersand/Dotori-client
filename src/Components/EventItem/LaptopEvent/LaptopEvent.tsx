import React from 'react';
import * as S from './Style';
import { ManufactureDate } from '../../../Utils/ManufactureDate';

interface LaptopProps {
    laptop: {
        laptopRoom: string,
        laptopSeat: string
    },
    onClickFunc: () => void
}

const LaptopEvent: React.FC<LaptopProps> = ({ laptop, onClickFunc }) => {
    return (
        <S.Postioner laptopObj={laptop} onClick={() => onClickFunc()} data-test="test-laptopEvent">
            <S.ContentWrapper>
                <S.Header>
                    <span>{ManufactureDate('M')} / {ManufactureDate('D')} 노트북 대여</span>
                    <time>22:00 ~ 23:50</time>
                </S.Header>
                <S.Content>
                    <span>{laptop.laptopRoom}, {laptop.laptopSeat}번 좌석</span>
                </S.Content>
            </S.ContentWrapper>
        </S.Postioner>
    )
}

export default LaptopEvent;