import * as S from './Style';
import React, { useState } from 'react';
import { TextLogo, Arrow, Arrow2 } from 'Assets/Svg';
import promotionUrl from '../../Assets/Promotion.png';
import { useEffect } from 'react';

const Promotion: React.FC = () => {
	const [disLeft, setDisLeft] = useState('none');
	const [disRight, setDisRIght] = useState('none');
	const [counter, setCounter] = useState<number>(0);

	useEffect(() => {
		if (counter <= 0) {
			setDisRIght('block');
			setDisLeft('none');
		} else if (counter >= 1) {
			setDisLeft('block');
			setDisRIght('none');
		} else {
			setDisLeft('none');
			setDisRIght('none');
		}
	}, [counter]);

	const leftBtnClickHandler = () => {
		setCounter(counter - 1);
	};
	const rightBtnClickHandler = () => {
		setCounter(counter + 1);
	};
	const underBarClick = (n: number) => {
		setCounter(n);
	};

	return (
		<>
			<S.Positioner>
				<S.Header>
					<TextLogo />
					<S.BtnWrapper>
						<S.SignBtn to="/signin">로그인</S.SignBtn>
					</S.BtnWrapper>
				</S.Header>

				<S.ProductBodyScrollable>
					<S.Products CurrentCounter={counter}>
						<S.Product>
							<S.PromotionImg src={promotionUrl} />
						</S.Product>
						<S.Product>
							<S.Dotory2Page>
								<S.DescTitle>DOTORI, Dormitory를 담다.</S.DescTitle>
								<S.DotoryDesc>
									DOTORI란? GSM 기숙사 관리 시스템으로 이전 기숙사 자치위원회
									디스코드 커뮤니티의 문제점을 개선하기 위해 학생
									주체적으로개발하여 효율적인 서비스 제공을 목적으로 만들어진
									웹사이트입니다.
									<br />
									<br />
									우리 학교의 커뮤니티 비중이 디스코드로 쏠려있는 점을 해결함과
									동시에 소프트웨어 마이스터고등학교라는 이름에 걸맞게 12명의
									인원이 직접 개발한 웹 사이트입니다.
									<br />
									<br />
									현재 우리 학교를 알릴 수 있는 수단이 매우 적다고 생각하였고,
									이런 작은 서비스 하나하나가 우리 학교의 인식을 바꾸고 좋은
									마케팅 거리가 되어 우리 학교의 수준을 내보일 수 있다는
									마음가짐으로 만든 웹 사이트입니다.
								</S.DotoryDesc>
							</S.Dotory2Page>
						</S.Product>
					</S.Products>

					<S.SlideBtn
						left="2.5vw"
						display={disLeft}
						onClick={leftBtnClickHandler}
					>
						<Arrow2 />
					</S.SlideBtn>
					<S.SlideBtn
						right="1vw"
						display={disRight}
						onClick={rightBtnClickHandler}
					>
						<Arrow />
					</S.SlideBtn>

					<S.UnderBar
						left="45%"
						CurrentCounter={counter}
						n={0}
						onClick={() => underBarClick(0)}
					/>
					<S.UnderBar
						left="48.5%"
						CurrentCounter={counter}
						n={1}
						onClick={() => underBarClick(1)}
					/>
				</S.ProductBodyScrollable>
			</S.Positioner>
		</>
	);
};

export default Promotion;
