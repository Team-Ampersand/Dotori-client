import React, { useEffect, useState } from 'react';
import * as S from '../BannerStyle';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { boardAlarm } from 'Api/notice';

interface BoardType {
	id: number;
	title: string;
	writerRole: Array<string>;
	lastBoardWriteDate: string;
}

const BetaBanner: React.FC = () => {
	const [grade, setGrade] = useState<number>(0);
	const [clean, setClean] = useState<boolean>(false);
	const [board, setBoard] = useState<BoardType>({
		id: 0,
		title: '',
		writerRole: [],
		lastBoardWriteDate: '',
	});

	const returnWriteRole = (writeRole: string) => {
		if (writeRole === 'ROLE_ADMIN') {
			return '사감선생님';
		} else if (writeRole === 'ROLE_DEVELOPER') {
			return '도토리';
		} else {
			return '자치위원회';
		}
	};

	const settings = {
		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	useEffect(() => {
		boardAlarm().then(({ data }) => {
			setBoard(data.data);
		});
	}, []);

	useEffect(() => {
		let date = new Date();
		let dayLabel = date.getDay();
		switch (dayLabel) {
			case 7:
				setGrade(3);
				setClean(true);
				return;
			case 2:
				setGrade(2);
				setClean(true);
				return;
			case 4:
				setGrade(1);
				setClean(true);
				return;
			default:
				return;
		}
	}, []);

	return (
		<S.Postioner>
			<S.StyledSlider {...settings}>
				<S.TextWrapper>
					{new Date(board.lastBoardWriteDate).getDate() + 3 >
					new Date().getDate() ? (
						<>
							<h2>공지사항</h2>
							<span>
								{board.title} - {returnWriteRole(board.writerRole[0])}
							</span>
							<p>{board.lastBoardWriteDate}</p>
						</>
					) : (
						<>
							<h2>공지사항</h2>
							<span>최근에 등록된 공지사항이 없어요</span>
						</>
					)}
				</S.TextWrapper>
				{clean ? (
					<S.TextWrapper>
						<h2>오늘의 청소 학년</h2>
						<span>
							오늘의 청소학년은 <strong>{grade}학년</strong> 이에요
						</span>
						{grade === 1 && <h4>오늘은 여학생 청소하는 날이에요</h4>}
					</S.TextWrapper>
				) : (
					<S.TextWrapper>
						<h2>오늘의 청소는 없어요</h2>
					</S.TextWrapper>
				)}
			</S.StyledSlider>
		</S.Postioner>
	);
};

export default BetaBanner;
