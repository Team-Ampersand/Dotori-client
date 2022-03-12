import React, { useEffect, useState } from 'react';
import * as S from '../BannerStyle';

const BetaBanner: React.FC = () => {
	const [grade, setGrade] = useState<number>(0);
	const [clean, setClean] = useState<boolean>(false);
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
		</S.Postioner>
	);
};

export default BetaBanner;
