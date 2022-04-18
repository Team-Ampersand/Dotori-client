import styled from 'styled-components';

type StyleProps = {
	thumbnail: string;
};

export const Positioner = styled.a`
	width: 90%;
	height: 100px;
	background-color: #fff;
	margin: 0 auto;
	border-radius: 10px;
	box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
	display: flex;
	align-items: center;
	justify-content: flex-start;
	margin-bottom: 3vh;
	text-decoration: none;
`;

export const ImgContainer = styled.div<StyleProps>`
	width: 133.42px;
	height: 74px;
	background-size: 133.42px 74px;
	border-radius: 5px;
	margin-left: 3%;

	background-repeat: no-repeat;
	background-image: url(${(props) => {
		return `https://img.youtube.com/vi/${props.thumbnail}/sddefault.jpg`;
	}});
`;

export const Container = styled.div`
	width: 68%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	margin-left: 2%;
`;

export const TitleContainer = styled.span`
	width: 100%;
	font-size: 16px;
	font-weight: 600;
	color: #333;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	white-space: normal;
	line-height: 1.2;
	text-align: left;
	word-wrap: break-word;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;

	a {
		color: #333;
		text-decoration: none;
	}
`;

export const AuthorContainer = styled.span`
	font-size: 12px;
	color: #c4c4c4;
	margin-top: 2%;
`;

export const DateContainer = styled.span`
	font-size: 12px;
	color: #c4c4c4;
	margin-top: 10%;
	width: 7.8%;
	margin-right: -5%;
`;

export const DeleteContainer = styled.div`
	cursor: pointer;
	color: #909090;
	position: relative;
	margin-bottom: 6%;
	margin-right: 2%;
`;
