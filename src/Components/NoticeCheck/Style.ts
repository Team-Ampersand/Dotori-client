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
`;

export const HeaderWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding-bottom: 100px;
`;

export const Header = styled.div`
	display: flex;
`;

export const TitleWrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-right: 30px;
	font-size: 32px;
	font-weight: 700;
	input {
		text-align: center;
		font-size: 26px;
		font-weight: lighter;
	}
`;

export const DateWrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: flex-end;
	width: 100px;
	font-size: 15px;
	font-weight: 600;
	color: #858585;
`;

export const CancelWrapper = styled.div`
	cursor: pointer;
`;

export const ContentWrapper = styled.div`
	display: flex;
	width: 100%;
	height: 800px;
	overflow-y: scroll;
`;

export const TextWrapper = styled.div`
	width: 100%;
	height: 100%;
	font-size: 20px;
	font-weight: 600;

	textarea {
		resize: none;
		font-size: 20px;
		width: 90%;
		height: 450px;
	}
`;

export const ImgWrapper = styled.img`
	width: 600px;
	height: 500px;
	margin-top: -50px;
	object-fit: contain;
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
