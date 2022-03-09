import React from 'react';
import * as S from './Style';
import { MatchType } from 'Utils/GlobalType';
import TableHeader from '../SelfstudyTable/Header/Header';
import { SongHeader } from '../SelfstudyTable/Header/model/CombineAdminHeader';

type SongObj = {
	id: number;
	user_id: number;
	music: string;
	singer: string;
	link: string;
	status: number;
};

const onlyCompareThisHeader = (match: MatchType) => {
	switch (match.path) {
		case '/song':
			return SongHeader;
		default:
			break;
	}
};

interface SongListProps {
	match: MatchType;
	SongData: SongObj[];
}

function thumbnailKey(link: string) {
	let thumbnailKey;

	thumbnailKey = link.split('=');
	return thumbnailKey[1];
}

const mappingSongList = (SongList: SongObj[], match: MatchType) =>
	SongList.map((Song) => (
		<S.SongList>
			<div style={{ flex: onlyCompareThisHeader(match)!.list[0].flex }}>
				{Song.id}
			</div>
			<div style={{ flex: onlyCompareThisHeader(match)!.list[1].flex }}>
				<S.ThumbnailKey thumbnailKey={thumbnailKey(Song.link)} />
			</div>
			<div style={{ flex: onlyCompareThisHeader(match)!.list[2].flex }}>
				{Song.music}
			</div>
			<div style={{ flex: onlyCompareThisHeader(match)!.list[3].flex }}>
				{Song.singer}
			</div>
			<div style={{ flex: onlyCompareThisHeader(match)!.list[4].flex }}>
				<a href={Song.link} target="_blank" rel="noreferrer">
					Link
				</a>
			</div>
			<div style={{ flex: onlyCompareThisHeader(match)!.list[5].flex }}>2</div>
			<div style={{ flex: onlyCompareThisHeader(match)!.list[6].flex }}>1</div>
			<div style={{ flex: onlyCompareThisHeader(match)!.list[7].flex }}>9</div>
			<div style={{ flex: onlyCompareThisHeader(match)!.list[8].flex }}>
				안채웅
			</div>
			<div style={{ flex: onlyCompareThisHeader(match)!.list[9].flex }}>
				<S.StatusWrapper status={Song.status}>
					{Song.status === 0
						? '승인 대기중'
						: Song.status === 1
						? '승인됨'
						: '거절됨'}
				</S.StatusWrapper>
			</div>
		</S.SongList>
	));

const RequestedSongs: React.FC<SongListProps> = ({ SongData, match }) => {
	return (
		<S.Postioner>
			<span>신청내역</span>
			<S.SongWrapper>
				<TableHeader match={match} />
				{mappingSongList(SongData, match)}
			</S.SongWrapper>
		</S.Postioner>
	);
};

export default RequestedSongs;
