import styled from 'styled-components';

export const Postioner = styled.div`
	width: 100%;
	height: 50%;
	background-color: #ffffff;
	border-radius: 20px;
`;

export const TextContainer = styled.div`
	padding: 5%;
	height: 60%;

	@media screen and (max-width: 1400px){
		height: 65%;
	}
	@media screen and (max-width: 700px){
		height: 70%;
	}

	label {
		font-weight: bold;
		font-size: 25px;
		color: #6d92c4;

		@media screen and (max-width: 1400px) {  
			font-size: 20px;
    	}
		@media screen and (max-width: 700px) {  
			font-size: 16px;
    	}
	}

	p {
		line-height: 18px;
		margin-top: 2%;

		@media screen and (max-width: 1400px) {  
			font-size: 13px;
   		}

		@media screen and (max-width: 700px) {  
			font-size: 10px;
    	}
	}
`;

export const InputWrapper = styled.div`
	width: 100%;
	height: 44%;
	padding: 7.5% 0 5% 5%;
	box-shadow: 0px -4px 12px rgba(0, 0, 0, 0.08);
	border-radius: 0px 0px 20px 20px;

	
	@media screen and (max-width: 1400px) {  
		display: flex;
		flex-direction: column;
    }

	p {
		font-weight: bold;
		font-size: 16px;
		margin-bottom: 2%;
	}

	input {
		width: 81%;
		height: 32%;
		max-height: 30px;
		font-size: 15px;
		padding-left: 10px;
		border: 2px solid #9ecff2;
		box-sizing: border-box;
		border-radius: 5px;
		margin-bottom: 5px;

		@media screen and (max-width: 1400px) {  
			height: 100%;
   		}
	}

	input:focus::-webkit-input-placeholder {
		color: gray;
		font-size: 15px;
		padding: 2px;
	}

	button {
		margin-left: 2%;
		width: 91px;
		height: 36.23px;
		border: 0;
		outline: 0;
		align-items: center;
		background: #9ecff2;
		border-radius: 5px;
		font-size: 15px;
		font-weight: bold;
		color: white;

		@media screen and (max-width: 700px) {  
			height: 30px;
   		}
	}
	

	button:hover {
		color: #9ecff2;
		border: 2px solid #ffffff;
		background-color: #ffffff;
	}
`;
