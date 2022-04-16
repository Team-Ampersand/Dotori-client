import React, { useMemo, useState } from 'react';
import * as S from './Style';
import SidebarList from '../SidebarList/SidebarList';
import Logo from 'Assets/Svg/Logo';
import { useNavigate } from 'react-router-dom';
import { useRole } from 'Hooks/useRole';

const sidebarMenuData = [
	{
		menuName: 'mainMenu',
		menuLists: [
			{
				router: '/home',
				menuIcon: 'Home',
				menuTitle: '홈',
				show: ['admin', 'councillor', 'developer', 'member'],
			},
			{
				router: '/notice',
				menuIcon: 'Notice',
				menuTitle: '공지사항',
				show: ['admin', 'councillor', 'developer', 'member'],
			},
			{
				router: '/selfstudy',
				menuIcon: 'Selfstudy',
				menuTitle: '자습신청',
				show: ['admin', 'councillor', 'developer', 'member'],
			},
			{
				router: '/song',
				menuIcon: 'Song',
				menuTitle: '기상음악',
				show: ['admin', 'councillor', 'developer', 'member'],
			},
			{
				router: '/authorization',
				menuIcon: 'More',
				menuTitle: '학생 정보',
				show: ['admin', 'councillor', 'developer'],
			},
			{
				router: '/penalty',
				menuIcon: 'Penalty',
				menuTitle: '규정 위반',
				show: ['admin'],
			},
		],
	},
];

const Sidebar: React.FC = () => {
	const navigate = useNavigate();
	const [currentRouter, setCurrentRouter] = useState(window.location.pathname);
	const role = useRole();
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
