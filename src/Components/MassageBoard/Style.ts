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
				return '#fff';
			} else if (props.status === 'IMPOSSIBLE') {
				return '#fc2c2c';
			} else if (props.status === 'APPLIED') {
				return '#617be3';
			} else if (
				props.status === 'CANT' ||
				props.count === 5 ||
				new Date().getHours() < 20 ||
				new Date().getHours() >= 21 ||
				['금', '토', '일'].indexOf(ManufactureDate('W')) !== -1 ||
				new Date().getMinutes() < 20
			) {
				return '#fc2c2c';
			}
		}};
	background-color: #fff;
	border-radius: 20px;
`;

export const MassageHeader = styled.div`
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 30px;

	h2 {
		font-size: 20px;
	}
	div {
		display: flex;
		align-items: center;
		cursor: pointer;
		a {
			text-decoration: none;
			span {
				font-size: 18px;
				color: #8b8b8b;
			}
		}
	}
`;

export const MassageContent = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: space-evenly;
	strong {
		font-size: 18px;
	}
	span {
		font-size: 5em;
		font-weight: bold;
	}
	p {
		font-size: 18px;
		font-weight: 500;
		color: #bbbbbe;
	}
`;

export const PointProgress = styled.div`
	position: relative;
	width: 60%;
	height: 10px;
	border-radius: 20px;
	background-color: #ededed;
`;

export const ActiveProgress = styled.div<StyleProps>`
	position: absolute;
	width: ${(props) => props.count! * 20}%;
	height: 9px;
	border-radius: 20px;
	background-color: ${(props) => props.statusColor};
`;

export const MassageButton = styled.button<StyleProps>`
	width: 40%;
	height: 20%;
	border: none;
	background-color: ${(props) => {
		if (
			props.status === 'CAN' &&
			props.count < 5 &&
			new Date().getHours() >= 20 &&
			new Date().getHours() < 21 &&
			['월', '화', '수', '목'].indexOf(ManufactureDate('W')) !== -1 &&
			new Date().getMinutes() >= 20
		) {
			return '#617be3';
		} else if (props.status === 'IMPOSSIBLE') {
			return '#fc2c2c';
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
			return '#fc2c2c';
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
			return '#fff';
		} else if (props.status === 'IMPOSSIBLE') {
			return '#fff';
		} else if (props.status === 'APPLIED') {
			return '#617be3';
		} else if (
			props.status === 'CANT' ||
			new Date().getHours() < 20 ||
			new Date().getHours() >= 21 ||
			['금', '토', '일'].indexOf(ManufactureDate('W')) !== -1 ||
			new Date().getMinutes() < 20
		) {
			return '#fff';
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
				return '#fff';
			} else if (props.status === 'IMPOSSIBLE') {
				return '#fff';
			} else if (props.status === 'APPLIED') {
				return '#617be3';
			} else if (
				props.status === 'CANT' ||
				props.count === 5 ||
				new Date().getHours() < 20 ||
				new Date().getHours() >= 21 ||
				['금', '토', '일'].indexOf(ManufactureDate('W')) !== -1 ||
				new Date().getMinutes() < 20
			) {
				return '#fff';
			}
		}};
	border-radius: 10px;
	font-size: 20px;
	font-weight: bold;
`;
