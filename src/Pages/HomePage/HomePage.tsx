import React from 'react';
import * as S from './Style';
// import BannerPage from '../BannerPage/BannerPage';
import { MatchType } from '../../Utils/GlobalType';
import { PageTemplate } from '..';
import {
	UserProfile,
	Selfstudyboard,
	MealBoard,
	Sidebar,
} from '../../Components';
import { HasToken } from '../../Atoms';
import { useHistory } from 'react-router';
import { useRecoilState, useSetRecoilState } from 'recoil';

interface HomeProps {
	match: MatchType;
}

const HomeContainer: React.FC<HomeProps> = ({ match }) => {
	const history = useHistory();
	const [logged, setLogged] = useRecoilState(HasToken);
	return (
		<S.Positioner>
			<Sidebar />
			<PageTemplate match={match}>
				<S.Container>
					<S.UserProfile>
						<UserProfile />
					</S.UserProfile>
					<S.Selfstudyboard>
						<Selfstudyboard />
					</S.Selfstudyboard>
					<S.MealBoard>
						<MealBoard />
					</S.MealBoard>
				</S.Container>
			</PageTemplate>
		</S.Positioner>
	);
};

export default HomeContainer;
