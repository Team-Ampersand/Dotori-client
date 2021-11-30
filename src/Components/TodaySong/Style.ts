import styled from 'styled-components';

export const Postioner = styled.div`
	width: 49%;
	height: 100%;
	display: flex;
	flex-direction: column;
	background-color: #ffffff;
	border-radius: 20px;
`;

export const PlaylistContainer = styled.div`
	width: 93.3%;
	padding: 3.5% 0 3.5% 6.5%;
	margin: 0 auto;
	display: flex;
	font-size: 26px;
	font-weight: bold;
	position: sticky;
	top: 0;
	border-radius: 20px;
	background-color: #fff;
`;

export const SongContainer = styled.div`
	overflow-y: auto;
	overflow-x: hidden;

	&::-webkit-scrollbar {
		display: none;
	}
`;
