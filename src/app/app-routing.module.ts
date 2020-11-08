import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './components/login/sign-up/sign-up.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {path: 'sign-up', component: SignUpComponent},
  {path: '**', redirectTo:'sign-up'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
