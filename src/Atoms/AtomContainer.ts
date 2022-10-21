import { atom } from 'recoil';
import { ManufactureDate } from 'Utils/ManufactureDate';

type User = {
	id: string;
	stuNum: string;
	memberName: string;
	gender: string;
	selfStudyCheck: boolean;
};

type lists = {
	id: number;
	url: string;
	memberName: string;
	createdDate: Date;
	email: string;
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

export const showPlaylistDate = atom<string>({
	key: 'showPlaylistDate',
	default: `${ManufactureDate('Y')}-${('0' + ManufactureDate('M')).slice(
		-2
	)}-${('0' + ManufactureDate('D')).slice(-2)}`,
});

export const setList = atom<lists[]>({
	key: 'setList',
	default: [],
});

export const fieldSelected = atom<string[]>({
	key: 'fieldSelected',
	default: [],
});

export const penaltySelected = atom<string[]>({
	key: 'penaltySelected',
	default: [],
});

export const classLookuped = atom<boolean>({
	key: 'classLookuped',
	default: false,
});

export const selectDate = atom<Date>({
	key: 'selectDate',
	default: new Date(),
})