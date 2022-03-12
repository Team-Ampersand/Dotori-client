import styled from 'styled-components';

type StyleProps = {
	isClicked: boolean;
};

export const PlaylistContainer = styled.div`
	width: 100%;
	height: 10%;
	display: flex;
	font-size: 26px;
	font-weight: bold;
	position: sticky;
	top: 0;
	border-radius: 20px;
	background-color: #fff;
	justify-content: space-between;
	align-items: center;
	h3 {
		margin-left: 30px;
	}
`;

export const DateWrapper = styled.span<StyleProps>`
	font-size: 16px;
	color: ${(props) => (props.isClicked ? '#333' : '#8b8b8b')};
	cursor: pointer;
	margin-top: 1%;
	margin-right: 5%;
`;

export const CalanderWrapper = styled.div<StyleProps>`
	display: ${(props) => (props.isClicked ? 'block' : 'none')};
	position: absolute;
`;
