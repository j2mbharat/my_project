import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IIlogin, ILogin } from '../interface/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpService: HttpClient) { }

  public userSignIn(loginInfo: ILogin): Observable<IIlogin> {
    return this.httpService.post<IIlogin>(environment.API_Auth + 'login', loginInfo)
  }

  public userLogout(): void {
    localStorage.removeItem("Authorization")
    localStorage.clear()
  }
}
