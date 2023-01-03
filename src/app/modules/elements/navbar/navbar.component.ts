import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {

  @ViewChild('navigation')
  public navigation: ElementRef | undefined

  public open!: boolean

  constructor() { }

  ngOnInit(): void {
  }

  public toggleuserMenu(): void {
    this.open = !this.open
    this.navigation?.nativeElement.classList.toggle('active')
  }

}
