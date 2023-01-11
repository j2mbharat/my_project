import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field"
import {MatCardModule} from "@angular/material/card"
import {MatInputModule} from "@angular/material/input";
import { RegisterComponent } from './register/register.component'


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
  ]
})
export class AuthModule { }
