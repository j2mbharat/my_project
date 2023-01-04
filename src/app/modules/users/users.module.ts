import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserlistComponent } from './userlist/userlist.component';
import { UsersComponent } from './users.component';
import { FormsModule } from "@angular/forms"
import { CommonComponentsModule } from 'src/app/common-components/common-components.module';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    UserlistComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    CommonComponentsModule,
    MatDialogModule
  ]
})
export class UsersModule { }
