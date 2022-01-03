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

export const SongContainer = styled.div`
	padding-top: 20px;
	height: 90%;
	overflow: scroll;
	&::-webkit-scrollbar {
		display: none;
	}
`;

export const BtnWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
`;

export const AllWrapper = styled.span<StyleProps>`
	font-size: 16px;
	color: ${(props) => (props.isClicked ? '#333' : '#8b8b8b')};
	cursor: pointer;
	margin-right: 40px;
`;

export const TodayWrapper = styled.span<StyleProps>`
	font-size: 16px;
	color: ${(props) => (props.isClicked ? '#333' : '#8b8b8b')};
	cursor: pointer;
	margin-right: 40px;
`;
