import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface StyleProps {
    sidebarcolor: boolean
}

export const LinkWrapper = styled(Link)<StyleProps>`
    text-decoration: none;
    display: flex;
    width: 100%;
    align-items: center;
    ${props => props.sidebarcolor ? 'color: #0F4C81' : 'color: #BBBBBE'};
    margin-bottom: 28%;

    svg {
        width: 25px;
        height: 23.64px;
        ${props => props.sidebarcolor ? 'fill: #0F4C81' : 'fill: #BBBBBE'};
    }
`

export const MenuTitle = styled.span`
    font-size: 22px;
    font-weight: bold;
    margin-left: 21px;
`