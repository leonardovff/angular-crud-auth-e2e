import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';

const routes: Routes = [{
    path: '', 
    component: MainComponent,
    children: [
        {
            path: 'usuarios',  loadChildren: './modules/users/users.module#UsersModule',
        },
        {
            path: '', redirectTo: '/usuarios'
        }
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {

}