import React, { useMemo, useState } from 'react';
import * as S from './Style';
import SidebarList from '../SidebarList/SidebarList';
import Logo from 'Assets/Svg/Logo';
import { useNavigate } from 'react-router-dom';

const returnShow = () => {
	return localStorage.getItem('role');
};

const sidebarMenuData = [
	{
		menuName: 'mainMenu',
		menuLists: [
			{
				router: '/home',
				menuIcon: 'Home',
				menuTitle: '홈',
				show: true,
			},
			{
				router: '/notice',
				menuIcon: 'Notice',
				menuTitle: '공지사항',
				show: true,
			},
			{
				router: '/selfstudy',
				menuIcon: 'Selfstudy',
				menuTitle: '자습신청',
				show: true,
			},
			{
				router: '/massage',
				menuIcon: 'Massage',
				menuTitle: '안마의자',
				show: true,
			},
			{
				router: '/song',
				menuIcon: 'Song',
				menuTitle: '기상음악',
				show: true,
			},
			{
				router: '/authorization',
				menuIcon: 'More',
				menuTitle: '학생 정보',
				show:
					returnShow() === 'admin' ||
					returnShow() === 'developer' ||
					returnShow() === 'councillor'
						? true
						: false,
			},
			{
				router: '/penalty',
				menuIcon: 'Penalty',
				menuTitle: '규정 위반',
				show: returnShow() === 'admin' ? true : false,
			},
		],
	},
];

const Sidebar: React.FC = () => {
	const navigate = useNavigate();
	const [currentRouter, setCurrentRouter] = useState(window.location.pathname);
	const mappingSidebarMenu = useMemo(() => {
		return sidebarMenuData.map((menuData) => (
			<SidebarList
				menuDataLists={menuData.menuLists}
				menuName={menuData.menuName}
				currentRouter={currentRouter}
				setCurrnentRouter={setCurrentRouter}
				key={`sidebar-${menuData.menuName}`}
			/>
		));
	}, [currentRouter]);

	return (
		<S.Postioner>
			<S.LogoWrapper
				onClick={() => {
					navigate('/home');
				}}
			>
				{/* <S.Logo> */}
				<Logo />
				{/* </S.Logo> */}
			</S.LogoWrapper>
			{mappingSidebarMenu}
		</S.Postioner>
	);
};

export default Sidebar;
