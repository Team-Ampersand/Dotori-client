import styled from 'styled-components';

export const Positioner = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
`;

export const Container = styled.div`
	width: 100%;
	height: 90%;
	padding: 60px 80px;
	margin-top: 1.8vh;
	background: #fff;
	border-radius: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (max-width: 1400px) {
		padding: 50px 60px;
	}
`;

export const HeaderWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding-bottom: 100px;

	@media (max-width: 700px) {
		padding-bottom: 60px;
	}
`;

export const Header = styled.div`
	display: flex;

	input {
		font-size: 26px;
		font-weight: lighter;
		width: 700px;
		margin-right: 20px;

		@media (max-width: 1400px){
			font-size: 24px;
		}
		@media (max-width: 1200px) {
			width: 100%;
		}
		@media (max-width: 700px){
			font-size: 18px;
		}
		
	}

	@media (max-width: 1200px) {
		flex-direction: column;
		gap: 10px;
	}
`;

export const TitleWrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-right: 30px;
	font-size: 32px;
	font-weight: 700;

	@media (max-width: 1400px){
		font-size: 24px;
	}
	@media (max-width: 700px){
		font-size: 18px;
	}
`;

export const DateWrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: flex-end;
	min-width: 90px;
	font-size: 15px;
	font-weight: 600;
	color: #858585;

	@media (max-width: 700px) {
		min-width: 66px;
		font-size: 12px;
	}
`;

export const CancelWrapper = styled.div`
	cursor: pointer;

	image{
		@media (max-width: 1400px) {
			width: 400px; 
			height: 400px;
		}
		@media (max-width: 700px) {
			width: 300px; 
			height: 300px;
		}
	}
`;

export const ContentWrapper = styled.div`
	display: flex;
	width: 100%;
	height: 800px;
	overflow-y: scroll;

	@media (max-width: 1200px) {
		flex-direction: column;
	}
`;

export const TextWrapper = styled.div`
	width: 100%;
	height: 100%;
	padding-right: 10px;
	font-size: 20px;
	font-weight: 600;

	@media (max-width: 1400px) {
		font-size: 16px;
	}
	@media (max-width: 1200px) {
		height: auto;
	}
	@media (max-width: 700px) {
		font-size: 12px;
	}

	textarea {
		resize: none;
		font-size: 20px;
		width: 90%;
		height: 450px;

		@media (max-width: 1400px) {
			font-size: 16px;
		}
		@media (max-width: 1200px) {
			width: 100%;
			height: 300px;
		}
		@media (max-width: 700px) {
			font-size: 12px;
		}
	}
`;

export const ImgWrapper = styled.img`
	width: 500px;
	height: 500px;
	margin-top: -50px;
	object-fit: contain;

	@media (max-width: 1400px){
		width: 400px;
		height: 400px;
	}
	@media (max-width: 1200px) {
		margin: 20px auto 0 auto;
		width: 350px;
		height: 350px;
	}
	@media (max-width: 700px){
		width: 300px;
		height: 300px;
		
	}
`;

export const Footer = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
	width: 100%;
	height: 50px;
	color: #878787;
	font-size: 18px;
	font-weight: 600;

	@media (max-width: 700px) {
		font-size: 16px;
	}
`;

export const EditBtn = styled.button`
	width: 100px;
	height: 50px;
	border-radius: 5px;
	background-color: #9ecff2;
	color: #fff;
	border: 0;
	font-size: 18px;
	font-weight: 600;
	&:hover {
		background-color: #fff;
		color: #9ecff2;
		border: 2px solid;
	}
`;
