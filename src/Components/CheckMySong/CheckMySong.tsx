import { showPlaylistDate } from 'Atoms';
import SongItem from 'Components/SongItem/SongItem';
import { useDecode } from 'Hooks/useDecode';
import { useRole } from 'Hooks/useRole';
import { useRecoilValue } from 'recoil';
import useSWR from 'swr';
import { apiClient } from 'Utils/Libs/apiClient';
import { MusicController } from 'Utils/Libs/requestUrls';
import * as S from './Style';
interface MusicType {
	data: {
		data: [
			{
				createdDate: Date;
				email: string;
				id: number;
				memberName: string;
				url: string;
				stuNum: string;
			}
		];
	};
}
interface MusicData {
	createdDate: Date;
	email: string;
	id: number;
	memberName: string;
	url: string;
}
interface CheckMySongProps {
	songlists: any;
}

const CheckMySong: React.FC<CheckMySongProps> = ({ songlists }) => {
	const user = useDecode();
	const role = useRole();
	const playlistDate = useRecoilValue(showPlaylistDate);
	const { data, error } = useSWR<MusicType>(
		MusicController.dateMusic(role, playlistDate),
		apiClient.get
	);

	const filterCheck = (data: MusicData[]) => {
		if (!data) return false;
		else if (data.filter((data) => data.email === user.sub).length > 0)
			return true;
		else return false;
	};

	if (!data) return <div />;
	if (error) return <div></div>;

	return (
		<S.Positioner>
			<label>내가 오늘 신청한 음악이에요</label>
			<S.SongContainer>
				{filterCheck(data.data.data) ? (
					data.data.data
						.filter((data) => data.email === user.sub)
						.map((item, idx) => {
							return (
								<SongItem
									id={item.id}
									url={item.url}
									createdDate={item.createdDate}
									memberName={item.memberName}
									email={item.email}
									key={`${idx}`}
									stuNum={item.stuNum}
								/>
							);
						})
				) : (
					<p>오늘은 음악 신청을 안 하셨네요!</p>
				)}
			</S.SongContainer>
		</S.Positioner>
	);
};

export default CheckMySong;
