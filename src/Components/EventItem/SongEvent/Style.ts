import styled from 'styled-components';

interface StyleProps {
	thumbnailKey?: string;
}

export const Postioner = styled.div<StyleProps>`
	width: 100%;
	height: 90%;
	border-radius: 20px;
	box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.16);
	cursor: pointer;
	display: flex;
	z-index: 1;
	position: relative;
	background-repeat: no-repeat;
	background-position: center;
	${(props) =>
		props.thumbnailKey
			? `background-image: url(https://img.youtube.com/vi/${props.thumbnailKey}/hqdefault.jpg); color: #fff;`
			: 'background-color: #ededed; display: none;'}

	&:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: inherit;
		z-index: -1;
		border-radius: 20px;
		filter: blur(5px);
	}
`;

export const ContentWrapper = styled.div`
	padding: 12px 21px;
	flex: 1;
	display: flex;
	flex-direction: column;
`;

export const Header = styled.div`
	flex: 2;
	display: flex;
	justify-content: space-between;
	align-items: center;
	span {
		font-size: 16px;
	}

	time {
		font-size: 12px;
		font-weight: lighter;
	}
`;

export const Content = styled.div`
	flex: 3;
	display: flex;
	align-items: center;

	span {
		font-size: 20px;
		font-weight: bold;
	}
`;
