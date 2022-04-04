import React from 'react';
import * as S from './Style';
import { BetaBanner } from '../../Components';

const CompareBanner = (nowUrl: string) => {
	switch (nowUrl) {
		case '/song':
			return;
		case '/notice':
			return;
		case '/notice/write':
			return;
		case '/selfstudy':
			return;
		case '/point':
			return;
		case '/authorization':
			return;
		case '/penalty':
			return;
		case '/massage':
			return;
		case '/home':
			return (
				<S.Postioner>
					<BetaBanner />
				</S.Postioner>
			);
		case `${nowUrl}`:
			return;
		default:
			return (
				<S.Postioner>
					<BetaBanner />
				</S.Postioner>
			);
	}
};

const BannerContainer: React.FC = () => {
	return <>{CompareBanner(window.location.pathname)}</>;
};

export default BannerContainer;
