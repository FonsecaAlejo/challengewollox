import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './components/login/sign-up/sign-up.component';
import { TechnologyListComponent } from './components/technology-list/technology-list.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'technology-list', component: TechnologyListComponent, canActivate: [ AuthGuard ]},
  {path: '**', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
