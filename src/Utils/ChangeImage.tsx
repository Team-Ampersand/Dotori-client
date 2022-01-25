import React from 'react';

import {
	Home,
	Notice,
	Laptop,
	Song,
	Point,
	Setting,
	School,
	Slack,
	Bug,
	More,
	PenaltyIcon,
} from '../Assets/Svg';

export const useRouterNameChangeMenuImage = (routerName: String) => {
	switch (routerName) {
		case 'Home':
			return <Home />;
		case 'Notice':
			return <Notice />;
		case 'Selfstudy':
			return <Laptop />;
		case 'Song':
			return <Song />;
		case 'Point':
			return <Point />;
		case 'Setting':
			return <Setting />;
		case 'School':
			return <School />;
		case 'More':
			return <More />;
		case 'Slack':
			return <Slack />;
		case 'Bug':
			return <Bug />;
		case 'Penalty':
			return <PenaltyIcon />;
		default:
			break;
	}
};
