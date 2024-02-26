import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { IIlogin, IUser } from 'src/app/interface/login';
import { LoginService } from 'src/app/services/login.service';
import { SnackbarComponent } from '../snackbar/snackbar.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild('navigation')
  public navigation: ElementRef | undefined

  public userDetails: IUser = new IUser();

  public snackBarConfig: any = {
    duration: 3000,
    horizontalPosition: 'center',
    verticalPosition: 'top',
    data: { message: 'Invalid Login' }
  }

  public open!: boolean

  constructor(
    private loginServise: LoginService,
    private roterService: Router,
    private snackbarService: MatSnackBar
  ) {

  }

  ngOnInit(): void {
    this.setUserDetails()
  }

  private setUserDetails(): void {
    this.loginServise.userProfile()
      .subscribe({
        next: (data: IIlogin) => {
          if (data.status == 200) {
            this.userDetails = data.data
          } else {
            this.snackBarConfig.data.message = data.message
            this.snackbarService.openFromComponent(SnackbarComponent,
              this.snackBarConfig
            )
          }
        },
        error: (e: any) => {
          this.snackBarConfig.data.message = e.error.message
          this.snackbarService.openFromComponent(SnackbarComponent,
            this.snackBarConfig
          )
        }
      })
  }

  public toggleuserMenu(): void {
    this.open = !this.open
    this.navigation?.nativeElement.classList.toggle('active')
  }

  public logOut(): void {
    this.loginServise.userLogout()
    this.roterService.navigate(['auth'])
  }


}
