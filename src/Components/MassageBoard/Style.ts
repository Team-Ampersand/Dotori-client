import styled from 'styled-components';
import { ManufactureDate } from 'Utils/ManufactureDate';

type StyleProps = {
	statusColor?: string;
	status?: string;
	count: number;
};

export const Positioner = styled.div<StyleProps>`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.12);
	background-color: #fff;
	border-radius: 20px;
	padding: 4% 6%;
`;

export const MassageHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 2rem;

	h2 {
		font-size: 20px;
	}

	div {
		width: 82px;
		display: flex;
		cursor: pointer;
		justify-content: space-between;
		align-items: center;
		text-decoration: none;
		span {
			font-size: 18px;
			color: #ababab;
		}
	}
`;

export const ApplyContent = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	p {
		font-weight: bold;
	}
`;

export const MassageContent = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: space-between;
	strong {
		font-size: 18px;
	}
	span {
		font-size: 5em;
		font-weight: bold;
	}
	p {
		font-size: 16px;
		font-weight: 500;
		color: #a1a1a1;
	}
`;

export const PointProgress = styled.div`
	position: relative;
	width: 60%;
	height: 10px;
	border-radius: 20px;
	background-color: #ededed;
	box-shadow: inset 0px 2px 3px rgba(0, 0, 0, 0.12);
`;

export const ActiveProgress = styled.div<StyleProps>`
	position: absolute;
	width: ${(props) => props.count! * 20}%;
	height: 9px;
	border-radius: 20px;
	background-color: ${(props) => props.statusColor};
`;

export const MassageButton = styled.button<StyleProps>`
	width: 7rem;
	height: 2.125rem;
	background-color: ${(props) => {
		if (
			props.status === 'CAN' &&
			props.count < 5 &&
			new Date().getHours() >= 20 &&
			new Date().getHours() < 21 &&
			['월', '화', '수', '목'].indexOf(ManufactureDate('W')) !== -1 &&
			new Date().getMinutes() >= 20
		) {
			return '#9ECFF2';
		} else if (props.status === 'IMPOSSIBLE') {
			return '#CACACA';
		} else if (props.status === 'APPLIED') {
			return '#fff';
		} else if (
			props.status === 'CANT' ||
			props.count === 5 ||
			new Date().getHours() < 20 ||
			new Date().getHours() >= 21 ||
			['금', '토', '일'].indexOf(ManufactureDate('W')) !== -1 ||
			new Date().getMinutes() < 20
		) {
			return '#CACACA';
		}
	}};
	color: ${(props) => {
		if (props.status === 'APPLIED') {
			return '#CACACA';
		} else {
			return '#fff';
		}
	}};
	border: ${(props) => {
		if (props.status === 'APPLIED') {
			return '2px solid #CACACA';
		} else {
			return 'none';
		}
	}};
	border-radius: 8px;
	font-size: 18px;
	font-weight: bold;

	&:hover {
		background-color: ${(props) => {
			if (
				props.status === 'CAN' &&
				props.count < 50 &&
				new Date().getHours() >= 20 &&
				new Date().getHours() < 21 &&
				['월', '화', '수', '목'].indexOf(ManufactureDate('W')) !== -1
			) {
				return '#fff';
			} else {
				return '#CACACA';
			}
		}};
		color: ${(props) => {
			if (
				props.status === 'CAN' &&
				props.count < 5 &&
				new Date().getHours() >= 20 &&
				new Date().getHours() < 21 &&
				['월', '화', '수', '목'].indexOf(ManufactureDate('W')) !== -1 &&
				new Date().getMinutes() >= 20
			) {
				return '#9ECFF2';
			} else {
				return '#ffffff';
			}
		}};
		border: 2px solid
			${(props) => {
				if (
					props.status === 'CAN' &&
					props.count < 5 &&
					new Date().getHours() >= 20 &&
					new Date().getHours() < 21 &&
					['월', '화', '수', '목'].indexOf(ManufactureDate('W')) !== -1 &&
					new Date().getMinutes() >= 20
				) {
					return '#9ECFF2';
				} else if (props.status === 'APPLIED') {
					return '#CACACA';
				} else {
					return '#CACACA';
				}
			}};
	}
`;

export const Explain = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Alert = styled.div`
	font-size: 13px;
	color: #6d92c4;
`;

export const ExceptionWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
