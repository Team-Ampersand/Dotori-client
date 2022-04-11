import React, { useState } from 'react';
import * as S from './Style';
import BannerPage from '../BannerPage/BannerPage';
import { ManufactureDate } from '../../Utils/ManufactureDate';

const returnPageType = (routerName: string) => {
	switch (routerName) {
		case '/home':
			return '홈';
		case '/selfstudy':
			return '자습신청';
		case '/song':
			return '기상음악';
		case '/notice':
			return '공지사항';
		case '/notice/write':
			return '공지사항 작성';
		case '/point':
			return '상벌점 관리';
		case '/authorization':
			return '학생 정보';
		case '/penalty':
			return '규정 위반';
		case '/massage':
			return '안마의자 신청';
		default:
			break;
	}
};

const returnValueType = (nowUrl: string) => {
	switch (nowUrl) {
		case '/selfstudy':
			return 'selfstudy';
		case '/song':
			return 'song';
		case '/notice':
			return 'notice';
		case '/notice/write':
			return 'notice write';
		case '/point':
			return 'point';
		case '/authorization':
			return 'student info';
		case 'penalty':
			return 'penalty';
		case 'massage':
			return 'massage';
		default:
			return 0;
	}
};

const BannerStatus = (children: React.ReactNode, isActive: boolean) => {
	if (
		returnValueType(window.location.pathname) === 'notice' ||
		'notice write' ||
		'point' ||
		'selfstudy' ||
		'song' ||
		'student info' ||
		'penalty' ||
		'massage'
	) {
		return (
			<>
				<BannerPage />
				<S.Content>{children}</S.Content>
			</>
		);
	} else if (!isActive) {
		return (
			<>
				<S.Banner>
					<BannerPage />
				</S.Banner>
				<S.Content>{children}</S.Content>
			</>
		);
	}
};

const PageTemplate: React.FC = ({ children }) => {
	const [isActive, setIsActive] = useState(false);

	return (
		<S.Postioner>
			<S.Wrapper>
				<S.Title>
					{returnPageType(window.location.pathname)}
					<strong>
						{ManufactureDate('Y')}.{ManufactureDate('M')}.{ManufactureDate('D')}{' '}
						({ManufactureDate('W')})
					</strong>
				</S.Title>
				{BannerStatus(children, isActive)}
			</S.Wrapper>
		</S.Postioner>
	);
};

export default PageTemplate;
