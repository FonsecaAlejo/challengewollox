import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modulos
import { TranslatesModule } from 'src/app/translates.module';

//Componentes
import { HomeComponent } from './home.component';




@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    TranslatesModule
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule { }
