import styled from 'styled-components';

type StyleProps = {
	thumbnail: string;
};

export const Positioner = styled.div`
	width: 35vw;
	height: 100px;
	background-color: #fff;
	margin: 0 auto;
	border-radius: 20px;
	box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
	display: flex;
	align-items: center;
	margin-bottom: 3vh;
`;

export const ImgContainer = styled.div<StyleProps>`
	width: 90px;
	height: 90px;
	background-size: 90px 90px;
	border-radius: 25px;
	background-image: url(${(props) => {
		return props.thumbnail;
	}});
	background-repeat: no-repeat;
	margin: 3vw;
`;

export const TitleContainer = styled.span`
	font-size: 20px;
	font-weight: 600;
	color: #333;
`;

export const AuthorContainer = styled.span`
	font-size: 18px;
	color: #c4c4c4;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
`;
