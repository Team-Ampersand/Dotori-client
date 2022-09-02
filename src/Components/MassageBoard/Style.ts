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
		width: 60%;
		font-size: 20px;
		@media (max-width: 1920px) {
			font-size: 18px;
		}
		@media (max-width: 1400px) {
			font-size: 16px;
		}
		@media (max-width: 700px) {
			font-size: 12px;
		}
	}

	a {
		width: 10vw;
		display: flex;
		cursor: pointer;
		justify-content: flex-end;
		align-items: center;
		gap: 5px;
		text-decoration: none;
		span {
			font-size: 18px;
			color: #ababab;

			@media (max-width: 1920px) {
				font-size: 16px;
			}
			@media (max-width: 1400px) {
				font-size: 13px;
			}
			@media (max-width: 700px) {
				font-size: 10px;
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
	justify-content: space-between;
	strong {
		font-size: 18px;
	}
	span {
		font-size: 55px;
		font-weight: bold;

		@media (max-width: 1920px) {
			font-size: 52px;
		}
		@media (max-width: 1400px) {
			font-size: 45px;
		}
		@media (max-width: 700px) {
			font-size: 30px;
		}
	}
	p {
		font-size: 16px;
		font-weight: 500;
		color: #a1a1a1;

		@media (max-width: 1920px) {
			font-size: 14px;
		}

		@media (max-width: 1400px) {
			font-size: 11px;
		}
		@media (max-width: 700px) {
			font-size: 6px;
		}
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
			new Date().getHours() === 20 &&
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
			new Date().getHours() !== 20 ||
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
	border-radius: 5px;
	font-size: 18px;
	font-weight: bold;

	&:hover {
		background-color: ${(props) => {
			if (
				props.status === 'CAN' &&
				props.count < 5 &&
				new Date().getHours() === 20 &&
				new Date().getMinutes() >= 20 &&
				['월', '화', '수', '목'].indexOf(ManufactureDate('W')) !== -1
			) {
				return '#fff';
			} else {
				return '#cacaca';
			}
		}};
		color: ${(props) => {
			if (
				props.status === 'CAN' &&
				props.count < 5 &&
				new Date().getHours() === 20 &&
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
					new Date().getHours() === 20 &&
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

	@media (max-width: 1920px) {
		width: 7rem;
		height: 2.125rem;
		font-size: 18px;
	}

	@media (max-width: 1400px) {
		width: 6rem;
		height: 1.6rem;
		font-size: 16px;
	}
	@media (max-width: 700px) {
		width: 4.5rem;
		height: 1.5rem;
		font-size: 12px;
	}
`;

export const Explain = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
`;

export const Alert = styled.div`
	font-size: 13px;
	text-align: center;
	color: #6d92c4;

	@media (max-width: 1920px) {
		font-size: 12px;
	}

	@media (max-width: 1400px) {
		font-size: 6px;
	}
	@media (max-width: 700px) {
		font-size: 5px;
	}
`;
