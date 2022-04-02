import styled from 'styled-components';

export const Positioner = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
`;

export const Container = styled.div`
	width: 100%;
	height: 72vh;
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
	padding-bottom: 130px;
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
	height: 700px;
`;

export const TextWrapper = styled.div`
	width: 100%;
	height: 100%;
	font-size: 20px;
	font-weight: 600;
`;

export const ImgWrapper = styled.img`
	min-width: 500px;
	max-width: 500px;
	min-height: 500px;
	max-height: 500px;
	margin-top: 20px;
	margin-right: 20px;
	img {
		width: 100%;
		height: 100%;
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
`;
