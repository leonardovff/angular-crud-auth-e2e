import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent
}, 
// {
//   path: 'main',
//   loadChildren: './modules/main/main.module#MainModule',
//   canActivate: [AuthGuard]

// }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
