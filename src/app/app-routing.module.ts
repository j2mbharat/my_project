import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from 'src/app/modules/auth/guard/auth-guard.guard';
import { PageNotFoundComponent } from './common-components/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import("src/app/modules/auth/auth.module").then(m => m.AuthModule)
  },
  {
    path: 'users',
    loadChildren: () => import("src/app/modules/users/users.module").then(m => m.UsersModule),
    canActivate: [AuthGuardGuard]
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    canActivate: [AuthGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
