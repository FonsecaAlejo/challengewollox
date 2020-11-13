import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lang: boolean = true;

  constructor(  private authService: AuthService,
                private router: Router,
                public translate: TranslateService) { 
                  translate.addLangs(['es', 'en']);
                  translate.setDefaultLang('es');
                }

  ngOnInit(): void {
  }


  changeLang(lang: boolean){

    this.lang = lang;

    if(this.lang == true){
      this.translate.use('es');
    }else{
      this.translate.use('en');
    }

    console.log(this.lang)
    

  }


}
