import React, { useState } from 'react';
import { BoardObj } from '../../Utils/GlobalType';
import * as S from './Style';
import { More } from '../../Assets/Svg';
import { BoardItem } from '..';

interface BoardListProps {
	board: BoardObj;
}

const BoardList: React.FC<BoardListProps> = ({ board }) => {
	const [height, setHeight] = useState(window.innerHeight);

	setInterval(() => setHeight(window.innerHeight), 100);

	const MappingReturnBoardItem = (board: BoardObj) =>
		board.list.map((item, ix) => {
			if (height >= 1080) {
				return ix >= 4 ? (
					false
				) : (
					<BoardItem
						list={item}
						type={board.id}
						key={`${board.id}-item-${ix}`}
					/>
				);
			} else if (height >= 900) {
				return ix >= 3 ? (
					false
				) : (
					<BoardItem
						list={item}
						type={board.id}
						key={`${board.id}-item-${ix}`}
					/>
				);
			} else {
				return ix >= 2 ? (
					false
				) : (
					<BoardItem
						list={item}
						type={board.id}
						key={`${board.id}-item-${ix}`}
					/>
				);
			}
		});

	return (
		<S.Postioner>
			<S.ListHeader>
				<h2>{board.title}</h2>
				<div onClick={() => alert('더보기 클릭')} data-test="test-more">
					<span>더보기</span>
					<More />
				</div>
			</S.ListHeader>
			<S.ListContent>{MappingReturnBoardItem(board)}</S.ListContent>
		</S.Postioner>
	);
};

export default BoardList;
