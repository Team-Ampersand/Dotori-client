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
	height: 85vh;
	border-radius: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	
`;

export const ContentWrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: flex-start;
`;

export const InputWrapper = styled.div`
	display: grid;
	width: 100%;
	height: 100%;
`;

export const TitleInput = styled.input`
	display: flex;
	justify-content: flex-start;
	width: 90%;
	height: 76px;
	padding: 0 40px;
	background-color: #fff;
	box-shadow: 0px 0px 13px 0px #0000001F;
	border-radius: 13px;
	border: none;
	font-size: 27px;
	font-weight: 400;
	&:focus::-webkit-input-placeholder {
		color: transparent;
	}
`;

export const ContentInput = styled.textarea`
	width: 90%;
	height: 60vh;
	margin-top: 3vh;
	background-color: #fff;
	box-shadow: 0px 0px 13px 0px #0000001F;
	border: none;
	border-radius: 13px;
	padding: 40px;
	font-size: 1.3rem;
	font-weight: 500;
	resize: none;
	&:focus::-webkit-input-placeholder {
		color: transparent;
	}
`;

export const ContentsWrapper = styled.div`
	display: grid;
	align-content: space-between;
	height: 100%;
`;

export const ImgContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 500px;
	height: 670px;
	border-radius: 15px;
	background-color: #fff;
	box-shadow: 0px 0px 13px 0px #0000001F;
	margin-right: 20px;
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
	img {
		width: 100%;
		height: 100%;
	}
	p {
		font-size: 18px;
		font-weight: 500;
	}
`;

export const ImgBtnWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	column-gap: 30px;
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
		background-color: #A7A7A7;
		outline: none;
		border: none;
		font-size: 16px;
		font-weight: 500;
		cursor: pointer;
		&:hover {
			background-color: #fff;
			box-shadow: 0px 0px 13px 0px #0000001F;
			color: #A7A7A7;
		}
	}
	button {
		width: 135px;
		height: 38px;
		border-radius: 5px;
		background-color: #F59D9D;
		color: #fff;
		font-size: 16px;
		font-weight: 500;
		outline: none;
		border: none;
		cursor: pointer;
		&:hover {
			background-color: #fff;
			border: 2px solid #F59D9D;
			color: #F59D9D;
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
`;

export const Btn = styled.button`
	width: 115px;
	height: 38px;
	background-color: #9ECFF2;
	box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
	border-radius: 5px;
	border: 0;
	color: #fff;
	font-size: 17px;
	font-weight: 600;
	cursor: pointer;
	&:hover {
		background-color: #fff;
		color: #9ECFF2;
	}
`;

export const DeleteBtn = styled.button`
	width: 115px;
	height: 38px;
	background-color: #F59D9D;
	border-radius: 5px;
	box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
	font-size: 17px;
	font-weight: 600;
	color: #fff;
	border: 0;
	cursor: pointer;
	&:hover {
		background-color: #fff;
		color: #F59D9D;
	}
`;

export const AuthorContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 500px;
	height: 76px;
	border-radius: 13px;
	background-color: #fff;
	color: #9F9F9F;
	font-size: 23px;
	font-weight: 600;
	box-shadow: 0px 0px 13px 0px #0000001F;
`;

export const AuthorWrapper = styled.div`
	padding-left: 30px;
`;