import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
