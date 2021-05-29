export interface ISignUpInput {
  name?: string;
  username: string;
  password: string;
}

export interface ISignInInput {
  username: string;
  password: string;
}

export interface IList {
  id: number;
  name: string;
}

export interface ISnippet {
  id?: number;
  list_id?: number;
  name: string;
  syntax_id: number;
  content?: string;
}

export interface ITag {
  id?: number;
  name: string;
}
