import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidenavComponent } from 'src/app/modules/elements/sidenav/sidenav.component'
import { NavbarComponent } from '../elements/navbar/navbar.component';

import { UsersRoutingModule } from './users-routing.module';
import { UserlistComponent } from './userlist/userlist.component';
import { UsersComponent } from './users.component';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from "@angular/forms"



@NgModule({
  declarations: [
    UserlistComponent,
    UsersComponent,
    SidenavComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCheckboxModule,
    FormsModule
  ]
})
export class UsersModule { }
