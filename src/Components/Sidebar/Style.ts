import styled from 'styled-components';

export const Postioner = styled.nav`
	width: 15rem;
	height: 85vh;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const LogoWrapper = styled.div`
	flex: 1.5;
	width: calc(100% - 40px);
	display: flex;
	align-items: center;
	margin-left: 40px;
`;

export const Logo = styled.img`
	width: 150px;
	height: 32px;
`;
