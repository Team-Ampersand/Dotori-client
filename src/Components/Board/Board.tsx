import React from 'react';
import * as S from './Style';
import { BoardObj } from '../../Utils/GlobalType';
import { BoardList } from '..';

interface BoardProps {
    boardPostList: BoardObj[]
}

const mappingBoardList = (boardPostList : BoardObj[]) => boardPostList.map((item, ix) => <BoardList board={item} key={`${item.id}-list-${ix}`} />)

const Board: React.FC<BoardProps> = ({ boardPostList }) => {
   
    return (
        <S.Postioner>
            {mappingBoardList(boardPostList)}
        </S.Postioner>
    )
}

export default Board;