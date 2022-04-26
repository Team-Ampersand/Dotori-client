import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Postioner = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	background-color: rgba(0, 0, 0, 0.08);
	border-radius: 20px;
	margin-bottom: 1.5rem;
`;

export const TextWrapper = styled.div`
	h2 {
		font-size: 28px;
		font-weight: bold;
		@media (max-width: 1920px) {
			font-size: 28px;
		}
		@media (max-width: 1400px) {
			font-size: 23px;
		}
		@media (max-width: 700px) {
			font-size: 15px;
		}
	}
	p {
		font-size: 16px;
		color: #858585;
	}
	span {
		font-weight: 600;
		font-size: 18px;
		line-height: 32px;
		@media (max-width: 1920px) {
			font-size: 18px;
		}
		@media (max-width: 1400px) {
			font-size: 13px;
		}
		@media (max-width: 700px) {
			font-size: 5px;
		}
	}
`;

export const StyledSlider = styled(Slider)`
	width: 100%;
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
		width: 100%;
		height: 100%;
		display: flex !important;
		justify-content: center;
		margin-left: 31px;
		flex-direction: column;
	}
`;
