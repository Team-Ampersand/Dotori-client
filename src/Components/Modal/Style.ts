import styled from 'styled-components';

interface StyleProps {
	authorColor: string;
}

export const Positioner = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	z-index: 10;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Overlay = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: rgba(255, 255, 255, 0.8);
`;

export const Container = styled.div`
	position: relative;
	top: 0px;
	padding: 0 auto;
	border-radius: 20px;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
	background-color: white;
	text-align: center;
	width: 50%;
	height: 800px;
`;

export const Title = styled.div<StyleProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 30px;
	font-weight: bold;
	color: white;
	background-color: ${(props) => props.authorColor};
	border-radius: 20px 20px 0 0;
	width: 100%;
	height: 8%;
	overflow: auto;
	padding-top: 5px;
`;

export const Close = styled.div`
	position: absolute;
	margin-right: 25px;
	color: white;
	right: 0;

	&:hover {
		cursor: pointer;
	}
`;

export const Content = styled.div`
	margin: 30px 10px 10px 10px;
	font-size: 20px;
`;
