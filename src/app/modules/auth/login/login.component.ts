import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ILogin } from 'src/app/interface/login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginServise: LoginService, private routerService: Router) { }

  ngOnInit(): void {
    localStorage.removeItem("Authorization")
  }

  public authenticationUser() {
    const userInfo: ILogin = {
      email: 'admin@bharat.com',
      password: 'Admin@123'
    }
    this.loginServise.userSignIn(userInfo).subscribe({
      next: (response) => {
        if (response.code === 0) {
          localStorage.setItem("Authorization", response.data.Token)
          this.routerService.navigate(['users'])
        }
      }
    })
  }
}
