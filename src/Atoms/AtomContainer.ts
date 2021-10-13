import { atom } from 'recoil';

export const HasToken = atom<boolean>({
	key: 'HasToken',
	default: false,
});
