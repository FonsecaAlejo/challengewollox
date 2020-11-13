import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Componentes
import { NavBarComponent } from './nav-bar.component';

//Routing
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    NavBarComponent,
  ]
})
export class NavBarModule { }
