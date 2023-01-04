import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild('navigation')
  public navigation: ElementRef | undefined

  public open!: boolean

  constructor(private loginServise: LoginService, private roterService: Router) { }

  ngOnInit(): void {
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
