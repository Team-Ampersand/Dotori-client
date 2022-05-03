import styled from 'styled-components';
import { ManufactureDate } from 'Utils/ManufactureDate';

type StyleProps = {
	statusColor?: string;
	Clicked?: string;
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

export const StudyHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 2rem;

	h2 {
		font-size: 20px;
		@media (max-width: 1920px) {
			font-size: 22px;
		}
		@media (max-width: 1400px) {
			font-size: 18px;
		}
		@media (max-width: 700px) {
			font-size: 12px;
		}
	}

	a {
		width: 92px;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		gap: 5px;
		cursor: pointer;
		text-decoration: none;
		span {
			font-size: 18px;
			color: #ababab;

			@media (max-width: 1920px) {
				font-size: 17px;
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

export const StudyContent = styled.div`
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
			font-size: 65px;
		}

		@media (max-width: 1400px) {
			font-size: 55px;
		}
		@media (max-width: 700px) {
			font-size: 30px;
		}
	}
	p {
		font-size: 16px;
		font-weight: 500;
		text-align: center;
		color: #a1a1a1;
		@media (max-width: 1920px) {
			font-size: 15px;
		}

		@media (max-width: 1400px) {
			font-size: 15px;
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
	width: ${(props) => props.count! * 2}%;
	height: 9px;
	border-radius: 20px;
	background-color: ${(props) => props.statusColor};
`;

export const StudyButton = styled.button<StyleProps>`
	width: 7rem;
	height: 2.125rem;
	background-color: ${(props) => {
		if (
			props.Clicked === 'CAN' &&
			props.count < 50 &&
			new Date().getHours() === 20 &&
			['월', '화', '수', '목'].indexOf(ManufactureDate('W')) !== -1
		) {
			return '#9ECFF2';
		} else if (props.Clicked === 'IMPOSSIBLE') {
			return '#CACACA';
		} else if (props.Clicked === 'APPLIED') {
			return '#fff';
		} else if (
			props.Clicked === 'CANT' ||
			props.count === 50 ||
			new Date().getHours() !== 20 ||
			['금', '토', '일'].indexOf(ManufactureDate('W')) !== -1
		) {
			return '#CACACA';
		}
	}};
	border: ${(props) => {
		if (props.Clicked === 'APPLIED') return '2px solid #CACACA';
		else return 'none';
	}};
	color: ${(props) => {
		if (props.Clicked === 'APPLIED') {
			return '#CACACA';
		} else {
			return '#fff';
		}
	}};
	border-radius: 5px;
	font-size: 18px;
	font-weight: bold;

	&:hover {
		background-color: ${(props) => {
			if (
				props.Clicked === 'CAN' &&
				props.count < 50 &&
				new Date().getHours() === 20 &&
				['월', '화', '수', '목'].indexOf(ManufactureDate('W')) !== -1
			) {
				return '#fff';
			} else {
				return '#CACACA';
			}
		}};
		color: ${(props) => {
			if (
				props.Clicked === 'CAN' &&
				props.count < 50 &&
				new Date().getHours() === 20 &&
				['월', '화', '수', '목'].indexOf(ManufactureDate('W')) !== -1
			) {
				return '#9ECFF2';
			} else {
				return '#fff';
			}
		}};
		border: 2px solid
			${(props) => {
				if (
					props.Clicked === 'CAN' &&
					props.count < 50 &&
					new Date().getHours() === 20 &&
					['월', '화', '수', '목'].indexOf(ManufactureDate('W')) !== -1
				) {
					return '#9ECFF2';
				} else return '#CACACA';
			}};
	}

	@media (max-width: 1920px) {
		width: 8rem;
		height: 2.2rem;
		font-size: 20px;
	}

	@media (max-width: 1400px) {
		width: 6.5rem;
		height: 2rem;
		font-size: 18px;
	}
	@media (max-width: 700px) {
		width: 4.5rem;
		height: 1.5rem;
		font-size: 12px;
	}
`;
