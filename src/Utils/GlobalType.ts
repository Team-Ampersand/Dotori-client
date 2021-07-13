export interface MatchType {
  path: string;
  url: string;
  isExact: boolean;
  params: object;
}

export type PostType = { id: number, title: string, date: string }

export type BoardObj = {
  title: string,
  id: string,
  list: PostType[]
}