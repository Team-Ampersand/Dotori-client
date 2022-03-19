export function ManufactureDate(dateType: 'Y' | 'M' | 'D' | 'W' | 'YMD') {
	let week = ['일', '월', '화', '수', '목', '금', '토'];
	switch (dateType) {
		case 'Y':
			return `${new Date().getFullYear()}`;
		case 'M':
			return `${new Date().getMonth() + 1}`;
		case 'D':
			return `${new Date().getDate()}`;
		case 'W':
			return `${week[new Date().getDay()]}`;
		case 'YMD':
			return `${
				new Date().getFullYear() +
				('0' + (new Date().getMonth() + 1)).slice(-2) +
				('0' + new Date().getDate()).slice(-2)
			}`;
		default:
			return '';
	}
}
