import styled from 'styled-components';

export const Positioner = styled.div`
	width: 100%;
	height: 30%;
	background-color: #ffffff;
	border-radius: 20px;

	label {
		display: inline-block;
		font-weight: 700;
		font-size: 15px;
		margin-top: 4%;
		margin-left: 5%;
	}
`;

export const SongContainer = styled.div`
	width: 100%;
	height: 90%;
	display: flex;
	justify-content: center;
	align-items: center;

	p {
		font-weight: 700;
		font-size: 14px;
		color: #8c8c8c;
		text-align: center;
	}
`;
