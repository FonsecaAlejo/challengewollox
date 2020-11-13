import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { TechnologyListComponent } from './technology-list.component';



@NgModule({
  declarations: [
    TechnologyListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TechnologyListComponent,
  ]
})
export class TechnologyListModule { }
