import styled from 'styled-components';

export const Postioner = styled.nav`
	width: 250px;
	min-width: 150px;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;

	@media (max-width: 1920px) {
		width: 300px;
	}

	@media (max-width: 1400px) {
		width: 250px;
	}
	@media (max-width: 700px) {
		width: 150px;
	}
`;

export const LogoWrapper = styled.div`
	width: 100%;
	display: flex;
	margin-left: 80px;
	margin-top: 50px;
	cursor: pointer;

	@media (max-width: 1920px) {
		width: 100%;
		margin-left: 120px;
		margin-top: 50px;
	}
	@media (max-width: 1400px) {
		width: 60%;
		margin-left: 0px;
		margin-top: 50px;
	}
	@media (max-width: 700px) {
		width: 50%;
		margin-left: -15px;
		margin-top: 50px;
	}
`;
