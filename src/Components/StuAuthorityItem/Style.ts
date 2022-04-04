import styled from 'styled-components';

type StyleProps = {
	colors?: boolean;
};

export const Container = styled.li`
	width: 95%;
	list-style: none;
	margin: 30px 40px;
	box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
	border-radius: 20px;
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const StuInfoWrapper = styled.div`
	display: flex;
	flex-direction: row;
`;

export const StuNumStyle = styled.div`
	font-size: 18px;
	width: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const NameStyle = styled.div`
	font-size: 18px;
	width: 280px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const AuthorityStyle = styled.div`
	font-size: 18px;
	width: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const SelfStudyStyle = styled.div`
	font-size: 18px;
	width: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const BanBtn = styled.button`
	width: 108px;
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
`;

export const BanCancelBtn = styled.button`
	width: 108px;
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
`;

export const EditBtn = styled.button`
	width: 108px;
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
`;

export const BtnWrapper = styled.div``;
