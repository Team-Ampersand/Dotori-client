import styled from 'styled-components';

export const Positioner = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Container = styled.div`
	width: 100%;
	height: 100%;
	border-radius: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const ContentContainer = styled.div`
	width: 100%;
	height: 95%;
	display: flex;
	align-items: flex-start;
	gap: 10px;

	@media (max-width: 1200px) {
		flex-direction: column;
	}
`;

export const InputWrapper = styled.div`
	display: grid;
	grid-template-rows: repeat(1, 70px);
	width: 100%;
	height: 100%;
	padding-bottom: 30px;

	@media (max-width: 1200px) {
		height: 120%;
	}
`;

export const TitleInput = styled.input`
	display: flex;
	justify-content: flex-start;
	width: 90%;
	height: 76px;
	padding: 0 40px;
	background-color: #fff;
	box-shadow: 0px 0px 13px 0px #0000001f;
	border-radius: 13px;
	border: none;
	font-size: 27px;
	font-weight: 400;
	&:focus::-webkit-input-placeholder {
		color: transparent;
	}
	
	@media (max-width: 1400px) {
		font-size: 23px;
		padding: 0 4%;
	}
	@media (max-width: 1200px) {
	}
	@media (max-width: 700px) {
		font-size: 20px;
		padding: 0 3%;
		width: 92%;
	}
`;

export const ContentInput = styled.textarea`
	width: 90%;
	height: 85%;
	margin-top: 3vh;
	background-color: #fff;
	box-shadow: 0px 0px 13px 0px #0000001f;
	border: none;
	border-radius: 13px;
	padding: 40px 40px 10px 40px;
	font-size: 1.3rem;
	font-weight: 500;
	resize: none;
	&:focus::-webkit-input-placeholder {
		color: transparent;
	}

	@media (max-width: 1400px) {
		font-size: 1.1rem;
		padding: 30px 4% 10px 4%;
	}
	@media (max-width: 1200px) {
	}
	@media (max-width: 700px) {
		font-size: 0.9rem;
	}
`;

export const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 50%;
	height: 93.8%;

	@media (max-width: 1200px) {
		flex-direction: row;
		width: 100%;
		gap: 10px;
	}
`;

export const ImgContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 95%;
	height: 80%;
	border-radius: 15px;
	background-color: #fff;
	box-shadow: 0px 0px 13px 0px #0000001f;
`;

export const LogoImg = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Img = styled.div`
	padding: 0 20px;
	height: 100%;
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;

	@media (max-width: 1200px) {
		padding: 0 10px;
	}

	img {
		width: 100%;
		height: 100%;

		@media (max-width: 1200px) {
			max-height: 250px;
		}
	}
	p {
		font-size: 18px;
		font-weight: 500;

		@media (max-width: 1200px) {
			font-size: 17px;
		}
	}
`;

export const SelectImgContainer = styled.div`
	display: flex;
	flex-direction: column;

	@media (max-width: 1200px) {
		height: 80%;
		justify-content: space-between;
	}
`

export const ImgBtnWrapper = styled.div`
	width: 100%;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	column-gap: 30px;

	@media (max-width: 1400px) {
		column-gap: 24px;
	}
	@media (max-width: 1200px) {
		flex-direction: column;
		gap: 20px;
		height: 100%;
	}

	input {
		display: none;
	}
	label {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 135px;
		height: 38px;
		border-radius: 5px;
		color: #fff;
		background-color: #a7a7a7;
		outline: none;
		border: none;
		font-size: 16px;
		font-weight: 500;
		cursor: pointer;
		&:hover {
			background-color: #fff;
			box-shadow: 0px 0px 13px 0px #0000001f;
			color: #a7a7a7;
		}

		@media (max-width: 1400px) {
			width: 130px;
		}
	}
	button {
		width: 135px;
		height: 38px;
		border-radius: 5px;
		background-color: #f59d9d;
		color: #fff;
		font-size: 16px;
		font-weight: 500;
		outline: none;
		border: none;
		cursor: pointer;
		&:hover {
			background-color: #fff;
			border: 2px solid #f59d9d;
			color: #f59d9d;
		}

		@media (max-width: 1400px) {
			width: 130px;
		}
	}
`;

export const BtnWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	column-gap: 30px;
	margin-bottom: 20px;
	padding-right: 45px;

	@media (max-width: 1400px) {
		padding-right: 40px;
	}
	@media (max-width: 700px) {
		padding-right: 35px;
	}
`;

export const Btn = styled.button`
	width: 115px;
	height: 38px;
	background-color: #9ecff2;
	box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
	border-radius: 5px;
	border: 0;
	color: #fff;
	font-size: 17px;
	font-weight: 600;
	cursor: pointer;
	&:hover {
		background-color: #fff;
		color: #9ecff2;
	}

	@media (max-width: 700px) {
		width: 100px;
		height: 36px;
		font-size: 15px;
	}
`;

export const DeleteBtn = styled.button`
	width: 115px;
	height: 38px;
	background-color: #f59d9d;
	border-radius: 5px;
	box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
	font-size: 17px;
	font-weight: 600;
	color: #fff;
	border: 0;
	cursor: pointer;
	&:hover {
		background-color: #fff;
		color: #f59d9d;
	}

	@media (max-width: 700px) {
		width: 100px;
		height: 36px;
		font-size: 15px;
	}
`;

export const AuthorContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 95%;
	min-height: 76px;
	border-radius: 13px;
	background-color: #fff;
	color: #9f9f9f;
	font-size: 23px;
	font-weight: 600;
	box-shadow: 0px 0px 13px 0px #0000001f;

	@media (max-width: 700px) {
		font-size: 20px;
		min-height: 72px;
	}
`;

export const AuthorWrapper = styled.div`
	padding-left: 30px;

	@media (max-width: 1400px) {
		width: 250px;
		padding-left: 20px;
	}
`;
