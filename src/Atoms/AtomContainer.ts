import { atom } from 'recoil';

type User = {
	id: string;
	stuNum: string;
	memberName: string;
};

export const HasToken = atom<boolean>({
	key: 'HasToken',
	default: false,
});

export const list = atom<User[]>({
	key: 'list',
	default: [],
});

export const isCalendarOpen = atom<boolean>({
	key: 'isCalendarOpen',
	default: false,
});
