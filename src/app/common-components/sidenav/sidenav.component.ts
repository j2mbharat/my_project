import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  public opened!: boolean

  constructor() { }

  ngOnInit(): void {
  }
  public handleSidenavToggle(): void {
    this.opened = !this.opened
  }
}
