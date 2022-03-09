import React from 'react';

import {
	Home,
	Notice,
	Laptop,
	Song,
	Point,
	Setting,
	More,
	PenaltyIcon,
	Massage,
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
		case 'More':
			return <More />;
		case 'Penalty':
			return <PenaltyIcon />;
		case 'Massage':
			return <Massage />;
		default:
			break;
	}
};
