import styled from 'styled-components';

export const Positioner = styled.div`
	width: 100%;
	height: 35%;
	background-color: #ffffff;
	border-radius: 20px;

	label {
		display: inline-block;
		font-weight: 700;
		font-size: 15px;
		margin-top: 4%;
		margin-left: 5%;
    
    @media screen and (max-width: 1400px) {
			font-size: 14px;
		}
		@media screen and (max-width: 700px) {
			font-size: 13px;
		}
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
    
    @media screen and (max-width: 1400px) {
			font-size: 12px;
		}
		@media screen and (max-width: 700px) {
			font-size: 11px;
		}
	}
`;
