import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Modulos
import { LoginModule } from './components/login/login.module';
import { HomeModule } from './components/home/home.module';
import { TranslatesModule } from './translates.module';
import { NavBarModule } from './components/nav-bar/nav-bar.module';
import { TechnologyListModule } from './components/technology-list/technology-list.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslatesModule,
    NavBarModule,
    HomeModule,
    LoginModule,
    TechnologyListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

