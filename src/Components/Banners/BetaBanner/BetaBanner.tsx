import React from 'react';
import { IllustBeta } from '../../../Assets/Svg';
import * as S from '../BannerStyle';

const BetaBanner: React.FC = () => {
	return (
		<S.Postioner>
			<S.TextWrapper>
				<h2>Beta 서비스: 11월말 예정</h2>
				<span>정식 서비스 : 2022년 1학기 예정</span>
			</S.TextWrapper>
			<S.IlustWrapper>
				<IllustBeta />
			</S.IlustWrapper>
		</S.Postioner>
	);
};

export default BetaBanner;
