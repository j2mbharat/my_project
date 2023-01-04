import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from 'src/app/common-components/page-not-found/page-not-found.component';
import { SidenavComponent } from 'src/app/common-components/sidenav/sidenav.component';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from '@angular/material/list';
import { NavbarComponent } from 'src/app/common-components/navbar/navbar.component';
import { SnackbarComponent } from 'src/app/common-components/snackbar/snackbar.component';
import { RouterModule } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    SidenavComponent,
    NavbarComponent,
    SnackbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSnackBarModule
  ],
  exports: [
    PageNotFoundComponent,
    SidenavComponent,
    NavbarComponent,
    SnackbarComponent
  ]
})
export class CommonComponentsModule { }
