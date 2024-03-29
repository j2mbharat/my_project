import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { FormGroup, FormControl, Validators } from "@angular/forms"
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from 'src/app/common-components/snackbar/snackbar.component';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  show = false;

  public password: any = {
  }

  public snackBarConfig: any = {
    duration: 3000,
    horizontalPosition: 'center',
    verticalPosition: 'top',
    data: { message: 'Invalid Login' }
  }

  constructor(
    private loginServise: LoginService,
    private routerService: Router,
    private snackbarService: MatSnackBar) {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.compose([Validators.required])),
      password: new FormControl(null, Validators.compose([Validators.required])),
    })
  }

  ngOnInit(): void {
    localStorage.removeItem("Authorization")
    this.password = 'password';
  }
  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }

  public authenticationUser() {
    if (this.loginForm.valid) {
      this.loginServise.userSignIn(this.loginForm.value)
        .subscribe({
          next: (response) => {
            if (response.status === 200) {
              localStorage.setItem("Authorization", response.token.token)
              this.routerService.navigate(['users'])
            } else {
              this.snackBarConfig.data.message = response.message
              this.snackbarService.openFromComponent(SnackbarComponent,
                this.snackBarConfig
              )
              this.setLoginValidation()
              this.removeLoginValidation()
            }
          },
          error: (e: any) => {
            this.snackBarConfig.data.message = (e.error.message ?? null) != null ? e.error.message : e.message
            this.snackbarService.openFromComponent(SnackbarComponent,
              this.snackBarConfig
            )
          }
        })
    } else {
      this.setLoginValidation()
      this.removeLoginValidation()
    }
  }

  private setLoginValidation(): void {
    this.loginForm.get('username')?.markAsDirty()
    this.loginForm.get('password')?.markAsDirty()
    this.loginForm.get('username')?.setErrors({ invalidLogin: true })
    this.loginForm.get('password')?.setErrors({ invalidLogin: true })
  }
  private removeLoginValidation(): void {
    this.loginForm.get('username')?.clearValidators()
    this.loginForm.get('username')?.updateValueAndValidity()
    this.loginForm.get('password')?.clearValidators()
    this.loginForm.get('password')?.updateValueAndValidity()
  }

  public get getLoginFormControls(): any {
    return this.loginForm.controls
  }
}
