import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";

import {RegionComponent} from "./region/region.component";

import {UserComponent} from "./user/user.component";
import {RoleComponent} from "./role/role.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ProjetComponent} from "./projet/projet.component";
import {StatfscComponent} from "./stat/statfsc/statfsc.component";
import {AuthGuard} from "./auth.guard";
import { FournisseurComponent } from './fournisseur/fournisseur.component';


const routes: Routes = [
  {path: 'dashboard', component : DashboardComponent,canActivate:[AuthGuard]},

  {path:'region', component:RegionComponent},

  {path:'user',component:UserComponent,canActivate:[AuthGuard]},
  {path:'role',component:RoleComponent ,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'projet',component:ProjetComponent},
  {path:'fournisseur',component:FournisseurComponent},
  {path: 'statfsc', component:StatfscComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: '**', redirectTo: 'login' },













];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
