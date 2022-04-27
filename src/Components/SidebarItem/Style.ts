import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface StyleProps {
	sidebarColor: boolean;
	show: boolean;
}

export const LinkWrapper = styled(Link)<StyleProps>`
	text-decoration: none;
	display: ${(props) => (props.show ? 'flex' : 'none')};
	width: 100%;
	align-items: center;
	${(props) => (props.sidebarColor ? 'color: #9ECFF2' : 'color: #BBBBBE')};
	margin-bottom: 20%;

	svg {
		width: 25px;
		height: 23.64px;
		${(props) => (props.sidebarColor ? 'fill: #9ECFF2' : 'fill: #BBBBBE')};
	}
`;

export const MenuTitle = styled.span`
	font-size: 22px;
	font-weight: bold;
	margin-left: 21px;

	@media screen and (max-width: 1400px){
		font-size: 18px;
	}
	@media screen and (max-width: 700px){
		font-size: 14px;
	}
`;
