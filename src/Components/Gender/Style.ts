import styled from 'styled-components';

export const Positioner = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const GenderWrapper = styled.div`
	margin-top: 3rem;
	display: flex;
	gap: 50px;
`;

export const Gender = styled.div`
	width: 200px;
	height: 200px;
	background-color: #fff;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.13);
	border-radius: 5px;
	transition: all 0.2s;
	span {
		margin-top: 1rem;
	}
	&:hover {
		transform: scale(1.2);
	}
`;
