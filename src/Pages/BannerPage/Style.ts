import styled from 'styled-components';

export const Postioner = styled.div`
	width: 100%;
	height: 141px;
	display: flex;
	align-items: center;
	margin-bottom: 15px;

	@media (max-width: 1920px) {
		height: 155px;
	}
	@media (max-width: 1400px) {
		height: 115px;
	}
	@media (max-width: 700px) {
		height: 70px;
	}
`;
