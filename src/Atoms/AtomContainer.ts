import { atom } from "recoil";

type User = {
  id: string;
  stdNum: string;
  username: string;
};

export const HasToken = atom<boolean>({
  key: "HasToken",
  default: false,
});

export const list = atom<User[]>({
  key: "list",
  default: [{ id: "", stdNum: "", username: "" }],
});
