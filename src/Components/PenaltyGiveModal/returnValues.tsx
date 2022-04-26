export const returnPenaltyValue = (penaltyType: string) => {
  switch (penaltyType) {
    case '반입 - 화기류':
      return 'FIREARMS';
    case '반입 - 흉기':
      return 'WEAPON';
    case '반입 - 주류':
      return 'ALCOHOL';
    case '반입 - 담배':
      return 'TOBACCO';
    case '반입 - 사행성기구':
      return 'MEANDERING_APPARATUS';
    case '반입 - 음식':
      return 'FOOD';
    case '사용 - 화기류':
      return 'USE_FIREARMS';
    case '사용 - 흉기':
      return 'USE_WEAPON';
    case '사용 - 주류':
      return 'DRINKING_ALCOHOL';
    case '사용 - 담배':
      return 'USE_TOBACCO';
    case '사용 - 사행성기구':
      return 'USE_MEANDERING_APPARATUS';
    case '사용 - 음식':
      return 'EAT_FOOD';	
    case '사감의 학습 및 생활지도 불이행':
      return 'MANAGER_GUIDANCE';
    case '지각':
      return 'TIME';
    case '외출':
      return 'OUTING';
    case '외박':
      return 'OVERNIGHT_STAY';
    case '물품훼손':
      return 'DAMAGE_OF_GOODS';
    case '절도':
      return 'THEFT';
    case '갈취':
      return 'CHANTAGE';	
    case '타호실 출입':
      return 'DISTURBING_SLEEP';
    case '전자기기 소지':
      return 'ELECTRONIC_DEVICE';
    case '고성방가':
      return 'LOUD';
    case '지정시간 외 기숙사 출입':
      return 'INCORRECT_ENTRY';
    case '세탁물 방치':
      return 'LAUNDRY';
    case '공공시설물 사용규정 위반':
      return 'VIOLATION_OF_THE_USE_OF_FACILITIES';
    case '부착된 게시물 훼손':
      return 'DAMAGE_OF_POST';	
    case '전자기기 소지 혹은 사용':
      return 'POSSESSION_OF_ELECTRONICS_DEVICES';
    case '호실 정리정돈 상태 불량':
      return 'CLEAN_COUNDITION_BAD';
    case '기숙사 환경 오염':
      return 'ENVIRONMENT_POLLUTION';
    case '애정 행위':
      return 'AFFECTIONATE_ACT';
    case '성적 행위':
      return 'SEXUAL_ACT';
    case '출입 금지 구역 출입':
      return 'ENTRY_TO_PROHIBITED_AREAS';
    case '학습실 면학분위기 저해':
      return 'VIOLATION_OF_STUDY_ROOM_RULES';	
    case '외부인 출입 허가':
      return 'OUTSIDER_ENTRY';													
    default:
      return '';
  }
}

export const returnPenaltyValueReverse = (penaltyType: string) => {
  switch (penaltyType) {
    case 'FIREARMS':
      return '반입 - 화기류';
    case 'WEAPON':
      return '반입 - 흉기';
    case 'ALCOHOL':
      return '반입 - 주류';
    case 'TOBACCO':
      return '반입 - 담배';
    case 'MEANDERING_APPARATUS':
      return '반입 - 사행성기구';
    case 'FOOD':
      return '반입 - 음식';	
    case 'USE_FIREARMS':
      return '사용 - 화기류';
    case 'USE_WEAPON':
      return '사용 - 흉기';
    case 'DRINKING_ALCOHOL':
      return '사용 - 주류';
    case 'USE_TOBACCO':
      return '사용 - 담배';
    case 'USE_MEANDERING_APPARATUS':
      return '사용 - 사행성기구';
    case 'EAT_FOOD':
      return '사용 - 음식';	
    case 'MANAGER_GUIDANCE':
      return '사감의 학습 및 생활지도 불이행';
    case 'TIME':
      return '지각';
    case 'OUTING':
      return '외출';
    case 'OVERNIGHT_STAY':
      return '외박';
    case 'DAMAGE_OF_GOODS':
      return '물품훼손';
    case 'THEFT':
      return '절도';
    case 'CHANTAGE':
      return '갈취';	
    case 'DISTURBING_SLEEP':
      return '타호실 출입';
    case 'ELECTRONIC_DEVICE':
      return '전자기기 소지';
    case 'LOUD':
      return '고성방가';
    case 'INCORRECT_ENTRY':
      return '지정시간 외 기숙사 출입';
    case 'LAUNDRY':
      return '세탁물 방치';
    case 'VIOLATION_OF_THE_USE_OF_FACILITIES':
      return '공공시설물 사용규정 위반';
    case 'DAMAGE_OF_POST':
      return '부착된 게시물 훼손';	
    case 'POSSESSION_OF_ELECTRONICS_DEVICES':
      return '전자기기 소지 혹은 사용';
    case 'CLEAN_COUNDITION_BAD':
      return '호실 정리정돈 상태 불량';
    case 'ENVIRONMENT_POLLUTION':
      return '기숙사 환경 오염';
    case 'AFFECTIONATE_ACT':
      return '애정 행위';
    case 'SEXUAL_ACT':
      return '성적 행위';
    case 'ENTRY_TO_PROHIBITED_AREAS':
      return '출입 금지 구역 출입';
    case 'VIOLATION_OF_STUDY_ROOM_RULES':
      return '학습실 면학분위기 저해';	
    case 'OUTSIDER_ENTRY':
      return '외부인 출입 허가';													
    default:
      return '';
  }
}