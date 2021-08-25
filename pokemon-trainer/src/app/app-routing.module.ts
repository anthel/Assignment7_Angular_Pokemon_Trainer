import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { TrainerPageComponent } from './trainer-page/trainer-page.component';
import { CataloguePage } from './catalogue/catalogue.page';
import { 
  AuthGuardService as AuthGuard 
} from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginPageComponent
  },
  {
    path: 'trainer-page',
    component : TrainerPageComponent
  },
  {
    path: 'catalogue',
    component: CataloguePage,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
