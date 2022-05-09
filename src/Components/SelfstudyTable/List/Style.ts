import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 210px;
	height: 250px;
	display: flex;
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

export const Medal = styled.div`
	position: absolute;
	top: 10px;
	left: 10px;
`;
