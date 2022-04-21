import styled from 'styled-components';

type StyleProps = {
	isClicked: boolean;
};

export const Postioner = styled.div`
	width: 100%;
	height: 930px;
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
		margin-left: 28vh;
		font-size: 26px;
		font-weight: 800;
		color: #424242;
		text-align: center;
	}
	svg {
		cursor: pointer;
		margin-right: 4vh;
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
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	p {
		font-size: 23px;
		margin-bottom: 4rem;
	}
`;

export const AppliedSongCount = styled.p`
	font-size: 14px;
	font-weight: 600;
	color: #969696;
	margin-top: 1vh;
	margin-left: 61vh;
`;

export const Container = styled.div`
	width: 100%;
	height: 100%;
	display: grid;

	margin-left: 3%;
`;
