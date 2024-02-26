import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IIlogin, ILogin, IUser } from '../interface/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {



  constructor(private httpService: HttpClient) {
  }

  public userSignIn(loginInfo: ILogin): Observable<IIlogin> {
    return this.httpService.post<IIlogin>(environment.API_Auth + 'Users/signin', loginInfo)
  }

  public userLogout(): void {
    localStorage.removeItem("Authorization")
    localStorage.clear()
  }

  public userProfile(): Observable<IIlogin> {
    return this.httpService.get<IIlogin>(environment.API_Auth + 'Users/profile', { headers: this.getAuthorizationToken })
  }

  private get getAuthorizationToken(): HttpHeaders {
    const token: string = (localStorage.getItem("Authorization") ?? '')
    const headers = new HttpHeaders({
      "Authorization": "Bearer " + token,
    })
    return headers;
  }
}
