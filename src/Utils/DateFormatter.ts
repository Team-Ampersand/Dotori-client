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
