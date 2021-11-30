import React, { useState } from 'react';
import * as S from './Style';
import BannerPage from '../BannerPage/BannerPage';
import { MatchType } from '../../Utils/GlobalType';
import { ManufactureDate } from '../../Utils/ManufactureDate';

interface TemplateProps {
	match: MatchType;
}

const returnPageType = (routerName: string) => {
	switch (routerName) {
		case '/':
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
		default:
			return 0;
	}
};

const BannerStatus = (
	match: MatchType,
	children: React.ReactNode,
	isActive: boolean
) => {
	if (
		returnValueType(match.path) === 'notice' ||
		'notice write' ||
		'point' ||
		'selfstudy' ||
		'song' ||
		'student info'
	) {
		return (
			<>
				<BannerPage match={match} />
				<S.Content>{children}</S.Content>
			</>
		);
	} else if (!isActive) {
		return (
			<>
				<S.Banner>
					<BannerPage match={match} />
				</S.Banner>
				<S.Content>{children}</S.Content>
			</>
		);
};

const PageTemplate: React.FC<TemplateProps> = ({ match, children }) => {
	const [isActive, setIsActive] = useState(false);

	return (
		<S.Postioner>
			<S.Wrapper>
				<S.Title>
					{returnPageType(match.path)}
					<strong>
						{ManufactureDate('Y')}년 {ManufactureDate('M')}월{' '}
						{ManufactureDate('D')}일 {ManufactureDate('W')}요일
					</strong>
				</S.Title>
				{BannerStatus(match, children, isActive)}
			</S.Wrapper>
		</S.Postioner>
	);
};

export default PageTemplate;
