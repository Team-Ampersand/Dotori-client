import React from 'react';
import * as S from './Style';
import { BetaBanner, SongBanner } from '../../Components';
import { MatchType } from '../../Utils/GlobalType';

interface BannerProps {
	match: MatchType;
}

const CompareBanner = (nowUrl: string) => {
	switch (nowUrl) {
		case '/song':
			return (
				<S.Postioner>
					<SongBanner />
				</S.Postioner>
			);
		case '/notice':
			return;
		default:
			return (
				<S.Postioner>
					<BetaBanner />
				</S.Postioner>
			);
	}
};

const BannerContainer: React.FC<BannerProps> = ({ match }) => {
	return <>{CompareBanner(match.path)}</>;
};

export default BannerContainer;
