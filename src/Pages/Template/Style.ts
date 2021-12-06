import styled from 'styled-components';

export const Postioner = styled.div`
	display: flex;
	width: calc(100% - 2% * 2);
	height: calc(100% - 4% * 2);
	align-items: center;
	justify-content: center;
	padding: 2.679% 2.381%;
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
`;

export const Title = styled.div`
	width: 100%;
	height: 74px;
	font-size: 50px;
	font-weight: bold;

	strong {
		font-size: 18px;
		margin-left: 14.5px;
		font-weight: 500;
	}
`;

export const Banner = styled.div`
	height: 191px;
	width: 100%;
	display: flex;
	align-items: center;
	margin-top: 18.8px;
	margin-bottom: 18.8px;
`;

export const Content = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	overflow: hidden;
`;

export const UserProfile = styled.div`
	display: flex;
	height: 100%;
	min-width: 403px;
	background-color: red;
`;

export const BoardWrapper = styled.div`
	height: 100%;
	width: 100%;
	display: grid;
	grid-template-rows: repeat(2, calc(50% - 18px));
	grid-template-columns: repeat(2, 1fr);
	background-color: yellow;
	margin-left: 30px;
	row-gap: 34px;
	column-gap: 36px;
`;
