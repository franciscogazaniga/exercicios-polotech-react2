export interface IRegister {
  onSubmit: (data: IUser) => void;
}

export interface IUser {
  name: string;
  email: string;
  age: string;
}