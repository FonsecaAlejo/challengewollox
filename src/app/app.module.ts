import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Modulos
import { LoginModule } from './components/login/login.module';
import { TranslatesModule } from './translates.module';

import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TechnologyListComponent } from './components/technology-list/technology-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    TechnologyListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    TranslatesModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

