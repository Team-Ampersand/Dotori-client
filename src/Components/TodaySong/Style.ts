import styled from 'styled-components';

type StyleProps = {
	isClicked: boolean;
};

export const Postioner = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
`;

export const TodaySongWrapper = styled.div`
	width: 100%;
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
	border-radius: 20px 20px 0px 0px;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.08);
	background-color: #fff;
	justify-content: space-between;
	align-items: center;
	h3 {
		margin-left: 50px;
		font-size: 26px;
		font-weight: bold;
	}
	svg {
		cursor: pointer;
		margin-top: 1%;
		margin-right: 7%;
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
	margin-top: 40%;

	svg {
		margin-left: 23%;
	}
`;

export const AppliedSongCount = styled.p`
	font-size: 18px;
	font-weight: bold;
	color: #b9b9b9;
`;

export const Container = styled.div`
	width: 100%;
	height: 100%;
	display: grid;

	margin-left: 3%;
`;
