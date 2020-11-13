import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Modulo login
import { LoginModule } from './components/login/login.module';

import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TechnologyListComponent } from './components/technology-list/technology-list.component';
import { TranslatesModule } from './translates.module';

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
