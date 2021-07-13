export function ManufactureDate(dateType : 'Y' | 'M' | 'D' | 'W') {
  var week = ['일', '월', '화', '수', '목', '금', '토'];
  switch (dateType) {
      case 'Y': return new Date().getFullYear();
      case 'M': return new Date().getMonth() + 1;
      case 'D': return new Date().getDate();
      case 'W': return week[new Date().getDay()];
      default: return false;
  }
}