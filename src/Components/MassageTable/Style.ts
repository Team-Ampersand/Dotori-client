import styled from 'styled-components';

type StyleProps = {
	borderColor: string;
};

export const Positioner = styled.div`
	width: 100%;
	height: 100%;
	background: #ffffff;
	border-radius: 20px;
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
	border-radius: 10px;
`;

export const Wrapper = styled.div<StyleProps>`
	width: 30vw;
	height: 75px;
	display: flex;
	justify-content: space-around;
	background-color: #fff;
	box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
	border-radius: 20px;
	margin-top: 2.7vh;
	margin-bottom: 2vh;
	border: 2px solid ${(props) => props.borderColor};
	div {
		font-size: 18px;
		color: #000;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;
