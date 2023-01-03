import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { FormGroup, FormControl, Validators } from "@angular/forms"
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../../elements/snackbar/snackbar.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup

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
      email: new FormControl(null, Validators.compose([Validators.required, Validators.email])),
      password: new FormControl(null, Validators.compose([Validators.required])),
    })
  }

  ngOnInit(): void {
    localStorage.removeItem("Authorization")
  }

  public authenticationUser() {
    if (this.loginForm.valid) {
      this.loginServise.userSignIn(this.loginForm.value).subscribe({
        next: (response) => {
          if (response.code === 0) {
            localStorage.setItem("Authorization", response.data.Token)
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
          this.snackBarConfig.data.message = e.message
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
    this.loginForm.get('email')?.markAsDirty()
    this.loginForm.get('password')?.markAsDirty()
    this.loginForm.get('email')?.setErrors({ invalidLogin: true })
    this.loginForm.get('password')?.setErrors({ invalidLogin: true })
  }
  private removeLoginValidation(): void {
    this.loginForm.get('email')?.clearValidators()
    this.loginForm.get('email')?.updateValueAndValidity()
    this.loginForm.get('password')?.clearValidators()
    this.loginForm.get('password')?.updateValueAndValidity()
  }

  public get getLoginFormControls(): any {
    return this.loginForm.controls
  }
}
