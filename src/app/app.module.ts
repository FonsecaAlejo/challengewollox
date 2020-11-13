import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

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
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'https://fonsecaalejo.github.io/challengewollox/assets/i18n/','.json');
}
