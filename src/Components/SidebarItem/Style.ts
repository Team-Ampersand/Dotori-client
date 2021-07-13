import styled from 'styled-components';
import { Link } from 'react-router-dom';

// interface StyleProps {
//     color: boolean
// }

export const LinkWrapper = styled(Link)`
    text-decoration: none;
    display: flex;
    width: 100%;
    align-items: center;
    ${props => props.replace ? 'color: #0F4C81' : 'color: #BBBBBE'};
    margin-bottom: 18%;

    svg {
        width: 25px;
        height: 23.64px;
        ${props => props.replace ? 'fill: #0F4C81' : 'fill: #BBBBBE'};
    }
`

export const MenuTitle = styled.span`
    font-size: 20px;
    font-weight: bold;
    margin-left: 21px;
`