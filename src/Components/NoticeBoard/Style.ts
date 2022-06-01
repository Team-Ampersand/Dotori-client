import styled from 'styled-components';

export const Positioner = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const Container = styled.div`
	width: 100%;
	height: 94%;
	background: #fff;
	border-radius: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	box-shadow: 0 0 13px rgba(0, 0, 0, 0.12);
`;

export const ExceptionWrapper = styled(Container)`
	justify-content: center;
	align-items: center;
	font-size: 25px;
	svg {
		margin-bottom: 15px;
	}
`;

export const PageBtnWrapper = styled.div`
	display: flex;
	column-gap: 30px;
	align-items: center;
	position: absolute;
	bottom: 20px;
	width: 8vw;
	span {
		svg {
			transform: rotate(180deg);
		}
	}
	svg {
		cursor: pointer;
	}
	label {
		text-align: center;
		font-size: 25px;
		font-weight: 600;
		border-radius: 50px;
	}
`;

export const EmptyBtn = styled.div`
	width: 15px;
	height: 19.5px;
`;

export const BtnWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	height: 3.6vh;
`;

export const WriteBtn = styled.button`
	width: 95px;
	height: 38px;
	margin-right: 0.5vw;
	background-color: #9ecff2;
	box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
	border: none;
	outline: none;
	color: #fff;
	border-radius: 5px;
	font-size: 18px;
	font-weight: 700;
	letter-spacing: 3px;
	&:hover {
		background-color: #fff;
		color: #9ecff2;
		border: 2px solid #9ecff2;
	}

	@media (max-width: 700px) {
		width: 75px;
		height: 34px;
		font-size: 16px;
		margin-right: 1.2vw;
	}
`;

export const EditBtn = styled(WriteBtn)`
	background-color: #c2c2c2;
	color: #fff;
	&:hover {
		background-color: #fff;
		color: #9ecff2;
		border: 2px solid #9ecff2;
	}
`;
