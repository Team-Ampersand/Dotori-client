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
	const year = date.getFullYear();
	const month = leftPad(date.getMonth() + 1);
	const day = leftPad(date.getDate());
	const hour = leftPad(date.getHours());
	const min = leftPad(date.getMinutes());
	const hourJoin = [hour, ''].join('시');
	const minJoin = [min, ''].join('분');
	const firstJoin = [year, month, day].join('-');
	const lastJoin = [hourJoin, minJoin].join('');
	return [firstJoin, lastJoin].join(' | ');
};
