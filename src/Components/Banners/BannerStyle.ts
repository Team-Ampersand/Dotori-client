import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

export const Postioner = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	background-color: #cccccc;
	border-radius: 20px;
	margin-bottom: 1.5rem;
`;

export const TextWrapper = styled.div`
	h2 {
		font-size: 28px;
		font-weight: bold;
	}
	p {
		font-size: 16px;
		color: #858585;
	}
	span {
		font-weight: 600;
		font-size: 18px;
		line-height: 32px;
	}
`;

export const IlustWrapper = styled.div`
	display: flex;
	width: 200px;
	height: 180px;
	justify-content: flex-end;
	margin-right: 35px;
	position: relative;

	svg {
		position: absolute;
		width: 200px;
		height: 180px;
		top: -50px;
	}
`;

export const StyledSlider = styled(Slider)`
	width: 100%;
	height: 100%;
	.slick-list {
		height: 100%;
	}
	.slick-track {
		height: 100%;
	}
	.slick-slide {
		width: 100%;
		height: 100%;
	}
	.slick-slide div {
		height: 100%;
	}

	.slick-slide div div {
		height: 100%;
		display: flex !important;
		justify-content: center;
		margin-left: 31px;
		flex-direction: column;
	}
`;
