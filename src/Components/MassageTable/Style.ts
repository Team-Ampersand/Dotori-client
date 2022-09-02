import styled from 'styled-components';

export const Positioner = styled.div`
	width: 100%;
	height: 100%;
`;

export const Content = styled.div`
	display: flex;
	flex-wrap: wrap;
	overflow-y: auto;
	height: 100%;
	justify-content: space-around;
	align-items: center;
	-ms-overflow-style: none;
	scrollbar-width: none;
	border-radius: 20px;
	box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.12);
	background-color: #fff;
`;

export const Wrapper = styled.div`
	width: 250px;
	height: 310px;
	display: flex;
	justify-content: space-around;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #fff;
	box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
	border-radius: 20px;
	position: relative;
	@media (max-width: 700px) {
		width: 90%;
	} ;
`;

export const StuNum = styled.span`
	font-size: 13px;
	color: #878787;
	margin-top: 1rem;
`;

export const Name = styled.span`
	font-size: 17px;
`;

export const ExceptionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	span {
		font-size: 20px;
	}
`;
