import styled from 'styled-components';

type StyleProps = {
	isClicked: boolean;
};

export const Postioner = styled.div`
	width: 49%;
	min-width: 345px;
	height: 100%;
	display: flex;
	flex-direction: column;
	background-color: #ffffff;
	border-radius: 20px;
`;

export const SongContainer = styled.div`
	padding-top: 20px;
	height: 90%;
	overflow: scroll;
	&::-webkit-scrollbar {
		display: none;
	}
`;

export const AllWrapper = styled.span<StyleProps>`
	font-size: 16px;
	color: ${(props) => (props.isClicked ? '#333' : '#8b8b8b')};
	cursor: pointer;
	margin-right: 40px;
`;

export const NoSongText = styled.div`
	font-size: 30px;
	display: grid;
	justify-content: center;
	font-size: 23px;
	margin-top: 30%;

	svg {
		margin-left: 15.5%;
	}
`;
