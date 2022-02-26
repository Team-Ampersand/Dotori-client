import styled from 'styled-components';

type StyleProps = {
	borderColor: string;
};

export const Wrapper = styled.div<StyleProps>`
	width: 100%;
	height: 100%;
	display: flex;
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

export const StatusWrapper = styled.p<{ status: boolean }>`
	padding: 3px 24px;
	border-radius: 10px;
	background-color: ${(props) => (props.status ? '#d9f6de' : '#fcecec')};
	display: flex;
	align-items: center;
	justify-content: center;

	span {
		font-size: 16px;
		color: ${(props) => (props.status ? '#28c842' : '#e11a1a')};
	}
`;

export const DetectedLaptop = styled.p<{ status: boolean }>`
	padding: 12px 12px;
	border-radius: 10px;
	background-color: ${(props) => (props.status ? '#fcecec' : '#a0a0a04f')};
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;

	span {
		font-size: 16px;
		color: ${(props) => (props.status ? '#e11a1a' : '#000')};
	}
`;
