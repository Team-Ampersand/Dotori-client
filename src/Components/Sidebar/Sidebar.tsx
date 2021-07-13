import React, { useMemo, useState } from 'react';
import * as S from './Style';
import SidebarList from '../SidebarList/SidebarList';
import Logo from '../../Assets/logo.png';

const sidebarMenuData = [
    {
        menuName: "mainMenu",
        menuLists: [
            {
                router: "/",
                menuIcon: "Home",
                menuTitle: "홈"
            },
            {
                router: "/notice",
                menuIcon: "Notice",
                menuTitle: "공지사항"
            },
            {
                router: "/laptop",
                menuIcon: "Laptop",
                menuTitle: "노트북 대여"
            },
            {
                router: "/song",
                menuIcon: "Song",
                menuTitle: "기상음악"
            },
            {
                router: "/point",
                menuIcon: "Point",
                menuTitle: "상벌점"
            },
            {
                router: "/setting",
                menuIcon: "Setting",
                menuTitle: "설정"
            }
        ]
    },
    {
        menuName: "subMenu",
        menuLists: [
            {
                router: "/school",
                menuIcon: "School",
                menuTitle: "학교 홈페이지"
            },
            {
                router: "/slack",
                menuIcon: "Slack",
                menuTitle: "학교 슬랙"
            },
            {
                router: "/bug",
                menuIcon: "Bug",
                menuTitle: "버그 제보"
            }
        ]
    }
]

const Sidebar: React.FC = () => {
    const [currentRouter, setCurrentRouter] = useState('/');
    const mappingSidebarMenu = useMemo(() => {
        return sidebarMenuData.map(menuData => (
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
            <S.LogoWrapper>
                <S.Logo src={Logo} />
            </S.LogoWrapper>
            {mappingSidebarMenu}
        </S.Postioner>
    )
}

export default Sidebar;