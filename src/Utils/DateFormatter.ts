const leftPad = (value) => {
	if (value >= 10) {
		return value;
	}
	return `0${value}`;
};

export const DateFormatter = (currentDate: Date) => {
	const date = new Date(currentDate);
	const year = date.getFullYear();
	const month = leftPad(date.getMonth() + 1);
	const day = leftPad(date.getDate());
	return [year, month, day].join('-');
};

export const showMusicDataFormatter = (currentDate: Date) => {
	const date = new Date(currentDate);
	const hour = leftPad(date.getHours());
	const min = leftPad(date.getMinutes());
	const hourJoin = [hour, ''].join(' : ');
	const minJoin = [min, ''].join('');
	return [hourJoin, minJoin].join(' ');
};
