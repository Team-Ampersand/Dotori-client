import styled from 'styled-components';

export const Postioner = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 4% 6%;
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;

	svg {
		fill: #8b8b8b;
		width: 21px;
		height: 22px;
	}

	h3 {
		width: 120px;
		font-size: 22px;
		@media (max-width: 1920px) {
			font-size: 20px;
		}
		@media (max-width: 1400px) {
			font-size: 18px;
		}
		@media (max-width: 700px) {
			font-size: 12px;
		}
	}
`;

export const LogoutWrapper = styled.div`
	width: 120px;
	display: flex;
	justify-content: flex-end;
	cursor: pointer;
	span {
		font-size: 18px;
		margin-left: 13px;
		color: #ababab;
		@media (max-width: 1920px) {
			font-size: 15px;
		}

		@media (max-width: 1400px) {
			font-size: 13px;
		}
		@media (max-width: 700px) {
			font-size: 10px;
		}
	}
`;

export const Content = styled.div`
	height: 60%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 0px 26px;
	a {
		text-decoration: none;
		color: #bbbbbe;
		font-weight: 500;
		margin-top: 1.125rem;
	}
`;

export const UserWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	svg {
		width: 100%;
		@media (max-width: 1920px) {
			width: 40%;
		}

		@media (max-width: 1400px) {
			width: 45%;
		}
		@media (max-width: 700px) {
			width: 100%;
		}
	}

	a {
		font-weight: bold;
		font-size: 16px;
		@media (max-width: 1920px) {
			font-size: 14px;
		}

		@media (max-width: 1400px) {
			font-size: 12px;
		}
		@media (max-width: 700px) {
			font-size: 7px;
		}
	}
	@media (max-height: 900px) {
		margin-bottom: 50px;
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
			width: 5vw;
			@media (max-width: 1920px) {
				font-size: 18px;
			}
			@media (max-width: 1400px) {
				font-size: 14px;
			}
			@media (max-width: 700px) {
				font-size: 7px;
			}
		}

		.grade {
			font-size: 18px;
			color: #bbbbbe;
			font-weight: bold;
			margin-left: 14px;
			@media (max-width: 1920px) {
				font-size: 16px;
			}
			@media (max-width: 1400px) {
				font-size: 13px;
			}
			@media (max-width: 700px) {
				font-size: 7px;
			}
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
	justify-content: flex-end;
	margin-top: 20px;
	margin-bottom: 20px;

	span {
		color: #222222;
		font-size: 12px;
		text-align: center;

		@media (max-width: 1920px) {
			font-size: 12px;
		}
		@media (max-width: 1400px) {
			font-size: 10px;
		}
		@media (max-width: 700px) {
			font-size: 2px;
		}
	}

	p {
		color: #222222;
		font-size: 12px;
		text-align: center;

		@media (max-width: 1920px) {
			font-size: 10px;
		}
		@media (max-width: 1400px) {
			font-size: 8px;
		}
		@media (max-width: 700px) {
			font-size: 6px;
		}

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

export const MemberControl = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-end;
`;

export const PenaltyBtn = styled.button`
	width: 137px;
	height: 36px;
	font-size: 16px;
	border: 0;
	background: #9ecff2;
	color: white;
	border-radius: 5px;
	margin-top: 30px;
	font-weight: bold;

	@media (max-width: 1920px) {
		font-size: 16px;
		width: 137px;
		height: 36px;
	}
	@media (max-width: 1400px) {
		font-size: 12px;
		width: 102px;
		height: 30px;
	}
	@media (max-width: 700px) {
		font-size: 5px;
		width: 80px;
		height: 25px;
	}

	&:hover {
		background: #ffffff;
		color: #9ecff2;
		border: 2px solid #9ecff2;
	}
`;
