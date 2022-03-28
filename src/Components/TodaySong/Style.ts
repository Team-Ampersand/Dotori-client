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

export const PlaylistContainer = styled.div`
	width: 100%;
	height: 10%;
	display: flex;
	position: sticky;
	top: 0;
	border-radius: 20px;
	background-color: #fff;
	justify-content: space-between;
	align-items: center;
	h3 {
		margin-left: 30px;
		font-size: 26px;
		font-weight: bold;
	}

	svg {
		cursor: pointer;
		margin-top: 1%;
		margin-right: 3.5%;
	}
`;

export const SongContainer = styled.div`
	padding-top: 20px;
	height: 90%;
	overflow-y: scroll;
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
