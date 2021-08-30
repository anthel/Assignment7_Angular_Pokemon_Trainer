import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CataloguePage } from './catalogue-page/catalogue.page';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthGuardService } from './login-page/services/auth-guard.service';
import { TrainerPageComponent } from './trainer-page/trainer-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginPageComponent
  },
  {
    path: 'trainer',
    component : TrainerPageComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'catalogue',
    component: CataloguePage,
    canActivate: [AuthGuardService]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
