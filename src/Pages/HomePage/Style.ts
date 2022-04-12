import styled from 'styled-components';

export const Positioner = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
`;

export const UserProfile = styled.div`
	display: flex;
	width: 29%;
	min-width: 200px;
	height: 100%;
	background-color: #fff;
	border-radius: 20px;
	box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.12);
`;

export const MealBoard = styled.div`
	width: 29%;
	height: 100%;
	min-width: 235px;
	background-color: #fff;
	border-radius: 20px;
	box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.12);
`;

export const SelfstudyBoard = styled.div`
	width: 100%;
	height: 48%;
`;

export const MassageBoard = styled.div`
	width: 100%;
	height: 48%;
	margin-bottom: 5px;
`;

export const MiddleWrapper = styled.div`
	width: 36%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
`;
