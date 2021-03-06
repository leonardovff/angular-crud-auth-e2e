import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: 'login', 
    component: LoginComponent, 
    canActivate: [LoginGuard]
  },
  { 
    path: 'logout', 
    component: LogoutComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    loadChildren: './modules/main/main.module#MainModule',
    canActivate: [AuthGuard],
    pathMatch: 'prefix',
    runGuardsAndResolvers: 'always'
  },
  { path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
