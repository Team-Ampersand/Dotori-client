import React from 'react';
import * as S from './Style';
import { useRouterNameChangeMenuImage } from '../../Utils/changeImage';

interface SidebarItemProps {
    router: string;
    menuIcon: string;
    menuTitle: string;
    currentRouter: string;
    setCurrnentRouter: (currentRouter: string) => void;
}


const SidebarItem: React.FC<SidebarItemProps> = ({ router, menuIcon, menuTitle, currentRouter, setCurrnentRouter }) => {
    return (
        <S.LinkWrapper to={router} onClick={() => setCurrnentRouter(router)} replace={currentRouter === router}>
            {useRouterNameChangeMenuImage(menuIcon)}
            <S.MenuTitle>{menuTitle}</S.MenuTitle>
        </S.LinkWrapper>
    )
}

export default SidebarItem;