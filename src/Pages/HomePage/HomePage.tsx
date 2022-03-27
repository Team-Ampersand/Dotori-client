import React, { useEffect } from 'react';
import * as S from './Style';
import { PageTemplate } from '..';
import {
	UserProfile,
	Selfstudyboard,
	MealBoard,
	Sidebar,
	MassageBoard,
} from '../../Components';

const HomeContainer: React.FC = () => {
	return (
		<S.Positioner>
			<Sidebar />
			<PageTemplate>
				<S.Container>
					<S.UserProfile>
						<UserProfile />
					</S.UserProfile>
					<S.MiddleWrapper>
						<S.SelfstudyBoard>
							<Selfstudyboard />
						</S.SelfstudyBoard>
						<S.MassageBoard>
							<MassageBoard />
						</S.MassageBoard>
					</S.MiddleWrapper>
					<S.MealBoard>
						<MealBoard />
					</S.MealBoard>
				</S.Container>
			</PageTemplate>
		</S.Positioner>
	);
};

export default HomeContainer;
