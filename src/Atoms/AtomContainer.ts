import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

type User = {
	id: string;
	stdNum: string;
	username: string;
};

export const HasToken = atom<boolean>({
	key: 'HasToken',
	default: false,
});

export const list = atom<User[]>({
	key: 'list',
	default: [{ id: '', stdNum: '', username: '' }],
});
