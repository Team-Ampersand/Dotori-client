import React, { useState } from 'react';
import * as S from './Style';
import * as I from 'Assets/Svg/index';
import { returnPenaltyValuesKorean } from 'Utils/Libs/returnPenaltyValues';

interface PenaltyBreakDownProps {
	penaltyList: any;
	penaltyMessage: any;
}

const PenaltyBreakDown: React.FC<PenaltyBreakDownProps> = ({
	penaltyList,
	penaltyMessage,
}) => {
	const [closed, setClosed] = useState(false);
	const handleMoreBtn = () => {
		setClosed(!closed);
	};

	const [all, setAll] = useState(true);
	const [takeban, setTakeBan] = useState(false);
	const [useban, setUseBan] = useState(false);
	const [unfulfill, setUnfulfill] = useState(false);
	const [time, setTime] = useState(false);
	const [damage, setDamage] = useState(false);
	const [sleep, setSleep] = useState(false);
	const [hygiene, setHygiene] = useState(false);
	const [affection, setAffection] = useState(false);
	const [entry, setEntry] = useState(false);
	const [learn, setLearn] = useState(false);
	const [outside, setOutside] = useState(false);

	const ViolationHistoryList =
		[penaltyList] &&
		[penaltyList].map((item) => {
			const obj = item && Object.entries(item);
			const SmallCatergories =
				obj &&
				obj.map((item: any) => {
					return (
						<>
							{all ? (
								item[1].cnt > 0 ? (
									<S.SmallCategories>
										<S.NameWrapper>
											{returnPenaltyValuesKorean[item[0]]}
										</S.NameWrapper>
										<S.CntWrapper>{item[1].cnt}회</S.CntWrapper>
										<S.DateWrapper
											onClick={handleMoreBtn}
											className={closed ? '' : 'close'}
										>
											{item[1].date.sort().join('\n')}
										</S.DateWrapper>
									</S.SmallCategories>
								) : null
							) : null}
							{takeban ? (
								item[0] === 'FIREARMS' ||
								item[0] === 'WEAPON' ||
								item[0] === 'ALCOHOL' ||
								item[0] === 'TOBACCO' ||
								item[0] === 'MEANDERING_APPARATUS' ||
								item[0] === 'FOOD' ? (
									<S.SmallCategories>
										<S.NameWrapper>
											{returnPenaltyValuesKorean[item[0]]}
										</S.NameWrapper>
										<S.CntWrapper>{item[1].cnt}회</S.CntWrapper>
										<S.DateWrapper
											onClick={handleMoreBtn}
											className={closed ? '' : 'close'}
										>
											{item[1].date.sort().join('\n')}
										</S.DateWrapper>
									</S.SmallCategories>
								) : null
							) : null}
							{useban ? (
								item[0] === 'USE_FIREARMS' ||
								item[0] === 'USE_WEAPON' ||
								item[0] === 'DRINKING_ALCOHOL' ||
								item[0] === 'USE_TOBACCO' ||
								item[0] === 'USE_MEANDERING_APPARATUS' ||
								item[0] === 'EAT_FOOD' ? (
									<S.SmallCategories>
										<S.NameWrapper>
											{returnPenaltyValuesKorean[item[0]]}
										</S.NameWrapper>
										<S.CntWrapper>{item[1].cnt}회</S.CntWrapper>
										<S.DateWrapper
											onClick={handleMoreBtn}
											className={closed ? '' : 'close'}
										>
											{item[1].date.sort().join('\n')}
										</S.DateWrapper>
									</S.SmallCategories>
								) : null
							) : null}
							{unfulfill ? (
								item[0] === 'MANAGER_GUIDANCE' ? (
									<S.SmallCategories>
										<S.NameWrapper>
											{returnPenaltyValuesKorean[item[0]]}
										</S.NameWrapper>
										<S.CntWrapper>{item[1].cnt}회</S.CntWrapper>
										<S.DateWrapper
											onClick={handleMoreBtn}
											className={closed ? '' : 'close'}
										>
											{item[1].date.sort().join('\n')}
										</S.DateWrapper>
									</S.SmallCategories>
								) : null
							) : null}
							{time ? (
								item[0] === 'TIME' ||
								item[0] === 'OUTING' ||
								item[0] === 'OVERNIGHT_STAY' ? (
									<S.SmallCategories>
										<S.NameWrapper>
											{returnPenaltyValuesKorean[item[0]]}
										</S.NameWrapper>
										<S.CntWrapper>{item[1].cnt}회</S.CntWrapper>
										<S.DateWrapper
											onClick={handleMoreBtn}
											className={closed ? '' : 'close'}
										>
											{item[1].date.sort().join('\n')}
										</S.DateWrapper>
									</S.SmallCategories>
								) : null
							) : null}
							{damage ? (
								item[0] === 'DAMAGE_OF_GOODS' ||
								item[0] === 'THEFT' ||
								item[0] === 'CHANTAGE' ? (
									<S.SmallCategories>
										<S.NameWrapper>
											{returnPenaltyValuesKorean[item[0]]}
										</S.NameWrapper>
										<S.CntWrapper>{item[1].cnt}회</S.CntWrapper>
										<S.DateWrapper
											onClick={handleMoreBtn}
											className={closed ? '' : 'close'}
										>
											{item[1].date.sort().join('\n')}
										</S.DateWrapper>
									</S.SmallCategories>
								) : null
							) : null}
							{sleep ? (
								item[0] === 'DISTURBING_SLEEP' ||
								item[0] === 'ELECTRONIC_DEVICE' ? (
									<S.SmallCategories>
										<S.NameWrapper>
											{returnPenaltyValuesKorean[item[0]]}
										</S.NameWrapper>
										<S.CntWrapper>{item[1].cnt}회</S.CntWrapper>
										<S.DateWrapper
											onClick={handleMoreBtn}
											className={closed ? '' : 'close'}
										>
											{item[1].date.sort().join('\n')}
										</S.DateWrapper>
									</S.SmallCategories>
								) : null
							) : null}
							{hygiene ? (
								item[0] === 'LOUD' ||
								item[0] === 'INCOREECT_ENTRY' ||
								item[0] === 'LAUNDRY' ||
								item[0] === 'VIOLATION_OF_THE_USE_OF_FACILITIES' ||
								item[0] === 'DAMAGE_OF_POST' ||
								item[0] === 'POSSESSION_OF_ELECTRONICS_DEVICES' ||
								item[0] === 'CLEAN_COUNDITION_BAD' ||
								item[0] === 'ENVIRONMENT_POLLUTION' ? (
									<S.SmallCategories>
										<S.NameWrapper>
											{returnPenaltyValuesKorean[item[0]]}
										</S.NameWrapper>
										<S.CntWrapper>{item[1].cnt}회</S.CntWrapper>
										<S.DateWrapper
											onClick={handleMoreBtn}
											className={closed ? '' : 'close'}
										>
											{item[1].date.sort().join('\n')}
										</S.DateWrapper>
									</S.SmallCategories>
								) : null
							) : null}
							{affection ? (
								item[0] === 'AFFECTIONATE_ACT' || item[0] === 'SEXUAL_ACT' ? (
									<S.SmallCategories>
										<S.NameWrapper>
											{returnPenaltyValuesKorean[item[0]]}
										</S.NameWrapper>
										<S.CntWrapper>{item[1].cnt}회</S.CntWrapper>
										<S.DateWrapper
											onClick={handleMoreBtn}
											className={closed ? '' : 'close'}
										>
											{item[1].date.sort().join('\n')}
										</S.DateWrapper>
									</S.SmallCategories>
								) : null
							) : null}
							{entry ? (
								item[0] === 'ENTRY_TO_PROHIBITED_AREAS' ? (
									<S.SmallCategories>
										<S.NameWrapper>
											{returnPenaltyValuesKorean[item[0]]}
										</S.NameWrapper>
										<S.CntWrapper>{item[1].cnt}회</S.CntWrapper>
										<S.DateWrapper
											onClick={handleMoreBtn}
											className={closed ? '' : 'close'}
										>
											{item[1].date.sort().join('\n')}
										</S.DateWrapper>
									</S.SmallCategories>
								) : null
							) : null}
							{learn ? (
								item[0] === 'VIOLATION_OF_STUDY_ROOM_RULES' ? (
									<S.SmallCategories>
										<S.NameWrapper>
											{returnPenaltyValuesKorean[item[0]]}
										</S.NameWrapper>
										<S.CntWrapper>{item[1].cnt}회</S.CntWrapper>
										<S.DateWrapper
											onClick={handleMoreBtn}
											className={closed ? '' : 'close'}
										>
											{item[1].date.sort().join('\n')}
										</S.DateWrapper>
									</S.SmallCategories>
								) : null
							) : null}
							{outside ? (
								item[0] === 'OUTSIDER_ENTRY' ? (
									<S.SmallCategories>
										<S.NameWrapper>
											{returnPenaltyValuesKorean[item[0]]}
										</S.NameWrapper>
										<S.CntWrapper>{item[1].cnt}회</S.CntWrapper>
										<S.DateWrapper
											onClick={handleMoreBtn}
											className={closed ? '' : 'close'}
										>
											{item[1].date.sort().join('\n')}
										</S.DateWrapper>
									</S.SmallCategories>
								) : null
							) : null}
						</>
					);
				});

			return (
				<>
					<S.LargeCategoriesWrapper>
						<S.LargeCategories>
							<S.TextWrapper
								isPenalty={all === true}
								onClick={() => {
									setAll(true);
									setTakeBan(false);
									setUseBan(false);
									setUnfulfill(false);
									setTime(false);
									setDamage(false);
									setSleep(false);
									setHygiene(false);
									setAffection(false);
									setEntry(false);
									setLearn(false);
									setOutside(false);
								}}
							>
								전체
							</S.TextWrapper>
						</S.LargeCategories>
						<S.LargeCategories>
							<S.TextWrapper
								isPenalty={takeban === true}
								onClick={() => {
									setTakeBan(true);
									setAll(false);
									setUseBan(false);
									setUnfulfill(false);
									setTime(false);
									setDamage(false);
									setSleep(false);
									setHygiene(false);
									setAffection(false);
									setEntry(false);
									setLearn(false);
									setOutside(false);
								}}
							>
								금지 물품 반입
							</S.TextWrapper>
						</S.LargeCategories>
						<S.LargeCategories>
							<S.TextWrapper
								isPenalty={useban === true}
								onClick={() => {
									setUseBan(true);
									setAll(false);
									setTakeBan(false);
									setUnfulfill(false);
									setTime(false);
									setDamage(false);
									setSleep(false);
									setHygiene(false);
									setAffection(false);
									setEntry(false);
									setLearn(false);
									setOutside(false);
								}}
							>
								금지 물품 사용
							</S.TextWrapper>
						</S.LargeCategories>
						<S.LargeCategories>
							<S.TextWrapper
								isPenalty={unfulfill === true}
								onClick={() => {
									setUnfulfill(true);
									setAll(false);
									setTakeBan(false);
									setUseBan(false);
									setTime(false);
									setDamage(false);
									setSleep(false);
									setHygiene(false);
									setAffection(false);
									setEntry(false);
									setLearn(false);
									setOutside(false);
								}}
							>
								사감 지도 불이행
							</S.TextWrapper>
						</S.LargeCategories>
						<S.LargeCategories>
							<S.TextWrapper
								isPenalty={time === true}
								onClick={() => {
									setTime(true);
									setAll(false);
									setTakeBan(false);
									setUseBan(false);
									setUnfulfill(false);
									setDamage(false);
									setSleep(false);
									setHygiene(false);
									setAffection(false);
									setEntry(false);
									setLearn(false);
									setOutside(false);
								}}
							>
								시간 관 소홀 및 이탈 행위
							</S.TextWrapper>
						</S.LargeCategories>
						<S.LargeCategories>
							<S.TextWrapper
								isPenalty={damage === true}
								onClick={() => {
									setDamage(true);
									setAll(false);
									setTakeBan(false);
									setUseBan(false);
									setUnfulfill(false);
									setTime(false);
									setSleep(false);
									setHygiene(false);
									setAffection(false);
									setEntry(false);
									setLearn(false);
									setOutside(false);
								}}
							>
								물품 훼손 및 절도
							</S.TextWrapper>
						</S.LargeCategories>
						<S.LargeCategories>
							<S.TextWrapper
								isPenalty={sleep === true}
								onClick={() => {
									setSleep(true);
									setAll(false);
									setTakeBan(false);
									setUseBan(false);
									setUnfulfill(false);
									setTime(false);
									setDamage(false);
									setHygiene(false);
									setAffection(false);
									setEntry(false);
									setLearn(false);
									setOutside(false);
								}}
							>
								취침 방해
							</S.TextWrapper>
						</S.LargeCategories>
						<S.LargeCategories>
							<S.TextWrapper
								isPenalty={hygiene === true}
								onClick={() => {
									setHygiene(true);
									setAll(false);
									setTakeBan(false);
									setUseBan(false);
									setUnfulfill(false);
									setTime(false);
									setDamage(false);
									setSleep(false);
									setAffection(false);
									setEntry(false);
									setLearn(false);
									setOutside(false);
								}}
							>
								공동 생활 방해 및 위생 상태 불량
							</S.TextWrapper>
						</S.LargeCategories>
						<S.LargeCategories>
							<S.TextWrapper
								isPenalty={affection === true}
								onClick={() => {
									setAffection(true);
									setAll(false);
									setTakeBan(false);
									setUseBan(false);
									setUnfulfill(false);
									setTime(false);
									setDamage(false);
									setSleep(false);
									setHygiene(false);
									setEntry(false);
									setLearn(false);
									setOutside(false);
								}}
							>
								애정 행위
							</S.TextWrapper>
						</S.LargeCategories>
						<S.LargeCategories>
							<S.TextWrapper
								isPenalty={entry === true}
								onClick={() => {
									setEntry(true);
									setAll(false);
									setTakeBan(false);
									setUseBan(false);
									setUnfulfill(false);
									setTime(false);
									setDamage(false);
									setSleep(false);
									setHygiene(false);
									setAffection(false);
									setLearn(false);
									setOutside(false);
								}}
							>
								기숙사 출입 금지 구역 출입
							</S.TextWrapper>
						</S.LargeCategories>
						<S.LargeCategories>
							<S.TextWrapper
								isPenalty={learn === true}
								onClick={() => {
									setLearn(true);
									setAll(false);
									setTakeBan(false);
									setUseBan(false);
									setUnfulfill(false);
									setTime(false);
									setDamage(false);
									setSleep(false);
									setHygiene(false);
									setAffection(false);
									setEntry(false);
									setOutside(false);
								}}
							>
								학습실 면학분위기 저해
							</S.TextWrapper>
						</S.LargeCategories>
						<S.LargeCategories>
							<S.TextWrapper
								isPenalty={outside === true}
								onClick={() => {
									setOutside(true);
									setAll(false);
									setTakeBan(false);
									setUseBan(false);
									setUnfulfill(false);
									setTime(false);
									setDamage(false);
									setSleep(false);
									setHygiene(false);
									setAffection(false);
									setEntry(false);
									setLearn(false);
								}}
							>
								외부인 출입 관여
							</S.TextWrapper>
						</S.LargeCategories>
					</S.LargeCategoriesWrapper>
					{penaltyMessage === '규정위반 내역이 없습니다.' ? (
						<S.ExceptionWrapper>
							<I.TextLogo />
							<S.None>규정위반 내역이 없습니다.</S.None>
						</S.ExceptionWrapper>
					) : (
						<S.SmallCategoriesWrapper>
							{SmallCatergories}
						</S.SmallCategoriesWrapper>
					)}
				</>
			);
		});
	return (
		<S.BreakDownContainer>
			<S.BreakDownWrapper>
				<S.Header>규정위반내역</S.Header>
				<S.Category>{ViolationHistoryList}</S.Category>
			</S.BreakDownWrapper>
		</S.BreakDownContainer>
	);
};

export default PenaltyBreakDown;
