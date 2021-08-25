import styled from 'styled-components';

interface StyleProps {
	AuthorColor: string;
}

export const Container = styled.div`
	width: 80vw;
	height: 7.3vh;
	background-color: #fff;
	box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
	border-radius: 20px;
	margin-top: 2.7vh;
	margin-left: 2vw;
	position: relative;
	cursor: pointer;
	&:hover {
		border-left: 2px solid rgba(0, 0, 0, 0.25);
		border-right: 2px solid rgba(0, 0, 0, 0.25);
	}
`;

export const AuthorStyle = styled.div<StyleProps>`
	span {
		color: ${(props) => props.AuthorColor};
		font-size: 1.5rem;
		font-weight: bold;
	}
	position: absolute;
	padding-top: 2.2vh;
	left: 1.2vw;
`;

export const TitleStyle = styled.div`
	span {
		color: #000;
		font-weight: bold;
		font-size: 1.375rem;
	}
	position: absolute;
	padding-top: 2.45vh;
	left: 9.75vw;
`;

export const DateStyle = styled.div`
	span {
		color: #ababab;
		font-size: 1.125rem;
		font-weight: bold;
	}
	position: absolute;
	padding-top: 2.7vh;
	right: 1.95vw;
`;
