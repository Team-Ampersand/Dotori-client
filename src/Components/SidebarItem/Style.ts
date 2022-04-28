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

		@media (max-width: 1920px) {
			width: 35px;
		}

		@media (max-width: 1400px) {
			width: 25px;
		}
		@media (max-width: 700px) {
			width: 18px;
		}
	}
`;

export const MenuTitle = styled.span`
	font-size: 22px;
	font-weight: bold;
	margin-left: 21px;

	@media (max-width: 1920px) {
		font-size: 1.5rem;
	}

	@media (max-width: 1400px) {
		font-size: 1rem;
	}
	@media (max-width: 700px) {
		font-size: 0.7rem;
	}
`;
