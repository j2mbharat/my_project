export interface ILogin {
  email: string,
  password: string
}

export interface IIlogin {
  status: number,
  message: string,
  data: IUser
  token: {
    token: string,
    refreshToken: string
  }
}



export class IUser {
  userId: number
  username: string
  firstName: string
  lastName: string
  email: string

  constructor() {
    this.userId = 0
    this.username = ""
    this.firstName = ""
    this.lastName = ""
    this.email = ""
  }
}
