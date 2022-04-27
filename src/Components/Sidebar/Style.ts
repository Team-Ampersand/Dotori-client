import styled from 'styled-components';

export const Postioner = styled.nav`
	min-width: 250px;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;

	@media screen and (max-width: 1400px){
		min-width: 200px;
	}
	@media screen and (max-width: 700px){
		min-width: 150px;
	}
`;

export const LogoWrapper = styled.div`
	width: 100%;
	display: flex;
	margin-left: 80px;
	margin-top: 50px;
	cursor: pointer;

	@media screen and (max-width: 700px) {
		margin-left: -5px;
		width: 60%;
	}
`;
