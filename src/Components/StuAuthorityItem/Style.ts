import styled from 'styled-components';

interface StyleProps {
	selfStudyColor?: string;
	genderColor?: string;
}

export const Container = styled.li`
	width: 95%;
	list-style: none;
	margin: 30px auto;
	box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
	border-radius: 20px;
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const StuInfoWrapper = styled.div`
	width: 58.8%;
	display: flex;
	flex-direction: row;

	@media screen and (max-width: 1400px){
		width: 55%;
	}
	@media screen and (max-width: 1400px){
		width: 60%;
	}
`;

export const StuNumStyle = styled.div<StyleProps>`
	font-size: 18px;
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${(props) => props.genderColor};

	@media screen and (max-width: 1400px) {
		font-size: 14px;
	}
	@media screen and (max-width: 700px){
		font-size: 12px;
	}
`;

export const NameStyle = styled.div`
	font-size: 18px;
	flex: 1.4;
	display: flex;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 1400px) {
		font-size: 14px;
		flex: 1;
	}
	@media screen and (max-width: 700px) {
		font-size: 12px;
	}
`;

export const AuthorityStyle = styled.div`
	font-size: 18px;
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 1400px) {
		font-size: 14px;
		flex: 1.3;
	}
	@media screen and (max-width: 700px) {
		font-size: 12px;
		flex: 1.5;
	}
`;

export const SelfStudyStyle = styled.div<StyleProps>`
	font-size: 18px;
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${(props) => props.selfStudyColor};

	@media screen and (max-width: 1400px) {
		font-size: 14px;
		flex: 1.3;
	}
	@media screen and (max-width: 700px) {
		font-size: 12px;
		flex: 1.5;
	}
`;

export const BanBtn = styled.button`
	flex: 1;
	height: 36px;
	margin-right: 20px;
	font-size: 18px;
	font-weight: bold;
	color: #fff;
	border: none;
	border-radius: 3px;
	background-color: #ed7878;

	&:hover {
		border: 2px solid #ed7878;
		color: #ed7878;
		background-color: #fff;
	}

	@media screen and (max-width: 1400px) {
		font-size: 14px;
		margin-right: 15px;
		min-width: 75px;
	}
	@media screen and (max-width: 700px) {
		height: 30px;
		font-size: 12px;
		margin-right: 10px;
	}
`;

export const BanCancelBtn = styled.button`
	flex: 1;
	height: 36px;
	margin-right: 20px;
	font-size: 18px;
	font-weight: bold;
	color: #fff;
	border: none;
	border-radius: 3px;
	background-color: #668ae7;

	&:hover {
		border: 2px solid #668ae7;
		color: #668ae7;
		background-color: #fff;
	}

	@media screen and (max-width: 1400px) {
		font-size: 14px;
		margin-right: 15px;
		min-width: 75px;
		max-width: 120px;
	}
	@media screen and (max-width: 700px) {
		height: 30px;
		font-size: 12px;
		margin-right: 10px;
	}
`;

export const EditBtn = styled.button`
	flex: 1;
	height: 36px;
	margin-right: 30px;
	font-size: 18px;
	font-weight: bold;
	color: #fff;
	border: none;
	border-radius: 3px;
	background-color: #b8b8b8;

	&:hover {
		border: 2px solid #b8b8b8;
		color: #b8b8b8;
		background-color: #fff;
	}

	@media screen and (max-width: 1400px) {
		font-size: 14px;
		margin-right: 16px;
		min-width: 75px;
		max-width: 120px;
	}
	@media screen and (max-width: 700px) {
		height: 30px;
		font-size: 12px;
		margin-right: 10px;
	}
`;

export const BtnWrapper = styled.div`
	width: 266px;
	align-items: center;

	@media screen and (max-width: 1400px) {
		width: 188px;
	}
`;
