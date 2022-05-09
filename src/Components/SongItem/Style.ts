import styled from 'styled-components';

type StyleProps = {
	thumbnail: string;
};

export const Positioner = styled.a`
	width: 90%;
	height: 120px;
	background-color: #fff;
	margin: 0 auto;
	border-radius: 10px;
	box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
	display: flex;
	align-items: center;
	justify-content: flex-start;
	margin-bottom: 3vh;
	text-decoration: none;

	@media screen and (max-width: 1400px) {
		height: 110px;
	}
`;

export const ImgContainer = styled.div<StyleProps>`
	width: 150.42px;
	height: 90px;
	background-size: 150.42px 90px;
	border-radius: 5px;
	margin-left: 3%;

	background-repeat: no-repeat;
	background-image: url(${(props) => {
		return `https://img.youtube.com/vi/${props.thumbnail}/sddefault.jpg`;
	}});
`;

export const Container = styled.div`
	width: 65%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	margin-left: 2%;
	margin-right: 3.8%;
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

	@media screen and (max-width: 1400px) {
		font-size: 14px;
	}
	@media screen and (max-width: 700px) {
		font-size: 12px;
	}

	a {
		color: #333;
		text-decoration: none;
	}
`;

export const AuthorContainer = styled.span`
	font-size: 12px;
	color: #c4c4c4;
	margin-top: 4%;
`;

export const RightContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const DateContainer = styled.span`
	font-size: 12px;
	color: #c4c4c4;

	@media screen and (max-width: 1400px) {
		font-size: 11px;
		margin: 17% 8px 0 10%;
	}
	@media screen and (max-width: 700px) {
		font-size: 10px;
		margin: 28% 8px 0 10%;
	}
`;

export const DeleteContainer = styled.div`
	height: 80px;
	margin-left: 70%;
	cursor: pointer;
	color: #909090;
	position: relative;
`;
