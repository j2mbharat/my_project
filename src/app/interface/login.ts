export interface ILogin {
  email: string,
  password: string
}

export interface IIlogin {
  code: number,
  message: string,
  data: IData
}

interface IData {
  Id: number,
  Name: string,
  Email: string,
  Token: string
}
