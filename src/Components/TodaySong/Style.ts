import styled from 'styled-components';

type StyleProps = {
	isClicked: boolean;
};

export const Postioner = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
`;

export const TodaySongWrapper = styled.div`
	width: 100%;
	height: 95%;
	display: flex;
	flex-direction: column;
	background-color: #ffffff;
	border-radius: 20px;
`;

export const PlaylistContainer = styled.div`
	width: 100%;
	height: 10%;
	position: sticky;
	border-radius: 20px 20px 0px 0px;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.08);
	background-color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 20px;

	h3 {
		font-size: 26px;
		font-weight: 800;
		color: #424242;
		text-align: center;

		@media screen and (max-width: 1400px) {  
			font-size: 20px;
			width: 90%;
    	}
		@media screen and (max-width: 700px) {  
			font-size: 15px;
   		}
	}
	
	svg {
		cursor: pointer;
		position: absolute;
		right: 3%;
		top: 40%;
		font-size: 16px;

		@media screen and (max-width: 1400px) {
			font-size: 14px;
		}
	}
`;

export const SongContainer = styled.div`
	padding-top: 20px;
	height: 890px;
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

export const AppliedSongCount = styled.div`
	height: 3%;
	display: flex;
	justify-content: flex-end;
	margin-top: 2%;
	margin-right: 5%;
	background-color: transparent;

	p {
		font-size: 14px;
		font-weight: 600;
		color: #969696;
	}
`;
