import styled from 'styled-components';

type StyleProps = {
	thumbnail: string;
};

export const Positioner = styled.a`
	width: 95%;
	height: 150px;
	background-color: #fff;
	margin: 0 auto;
	border-radius: 20px;
	box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	margin-bottom: 3vh;
	text-decoration: none;
`;

export const ImgContainer = styled.div<StyleProps>`
	width: 120px;
	height: 90px;
	background-size: 120px 90px;
	border-radius: 25px;
	background-image: url(${(props) => {
		return `https://img.youtube.com/vi/${props.thumbnail}/sddefault.jpg`;
	}});
	background-repeat: no-repeat;
`;

export const TitleContainer = styled.span`
	font-size: 20px;
	font-weight: 600;
	color: #333;

	a {
		color: #333;
		text-decoration: none;
	}
`;

export const AuthorContainer = styled.span`
	font-size: 18px;
	color: #c4c4c4;
`;

export const Container = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
`;

export const DeleteContainer = styled.div`
	font-size: 20px;
	cursor: pointer;
	color: #fc2c2c;
`;
