import React from 'react';
import { PostType } from '../../Utils/GlobalType';
import * as S from './Style';

interface BoardItemProps {
    list: PostType
    type: string
}

const returnPostTypeCircleColor = (postType: string) => {
    switch (postType) {
        case 'domitory':
            return '#336DCD';
        case 'forest':
            return '#7926C7';
        case 'song':
            return '#33CD4B';
        case 'none':
            return '#CD3333';
    }
}

const BoardItem: React.FC<BoardItemProps> = ({ list, type }) => {
    return (
        <S.Postioner onClick={() => alert("리스트 클릭")} data-test="test-postList">
            <S.ActiveDivision>
                <S.ActiveCircle circleColor={returnPostTypeCircleColor(type)!}/>
            </S.ActiveDivision>
            <S.TitleDivision>
                <span>{list.title}</span>
            </S.TitleDivision>
            <S.DateDivision>
                <span>{list.date}</span>
            </S.DateDivision>
        </S.Postioner>
    )
}

export default BoardItem;