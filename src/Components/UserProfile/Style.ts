import styled from 'styled-components';

export const Postioner = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const Header = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: 20px;
	margin-right: 20px;

	svg {
		fill: #8b8b8b;
		width: 21px;
		height: 22px;
	}
`;

export const LogoutWrapper = styled.div`
	width: 100px;
	display: flex;
	justify-content: flex-end;
	cursor: pointer;
	span {
		font-size: 18px;
		margin-left: 13px;
		color: #fc2c2c;
	}
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 0px 26px;
`;

export const UserWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media (max-height: 900px) {
		justify-content: flex-end;

		svg {
			display: none;
			opacity: 0;
		}

		div {
			margin-right: auto;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-bottom: 10px;

			.name {
				font-size: 20px;
				font-weight: bold;
			}

			.grade {
				font-size: 18px;
				color: #bbbbbe;
				font-weight: bold;
				margin-left: 14px;
			}
		}
	}

	div {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 18px;
		margin-bottom: 0px;

		.name {
			font-size: 20px;
			font-weight: bold;
		}

		.grade {
			font-size: 18px;
			color: #bbbbbe;
			font-weight: bold;
			margin-left: 14px;
		}
	}
`;

export const PointWrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 30px;
	margin-top: 15px;

	span {
		margin: 0px 10px;
		font-size: 16px;
		font-weight: bold;
	}

	sub {
		margin-left: 15px;
		font-size: 15px;
		font-weight: bold;
		color: #fe5b5b;
	}
`;

export const PointProgress = styled.div`
	position: relative;
	width: 60%;
	height: 4px;
	border-radius: 50px;
	background-color: #ededed;
`;

export const ActiveProgress = styled.div`
	position: absolute;
	width: 15px;
	height: 4px;
	border-radius: 50px;
	background-color: #fe5b5b;
`;

export const Footer = styled.div`
	margin: 0px 26px;
	display: flex;
	flex-direction: column;
`;

export const Label = styled.span`
	font-size: 20px;
	font-weight: bold;
`;

export const Policy = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 20px;
	margin-bottom: 20px;

	span {
		color: #222222;
		font-size: 12px;
	}

	p {
		color: #222222;
		font-size: 12px;

		strong {
			color: #217ece;
			font-weight: 500;
			cursor: pointer;
		}

		a {
			text-decoration: none;
		}
	}
`;
