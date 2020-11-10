import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, DoCheck {

  auth: boolean;
  favoriteTech: string[];

  constructor(private authService: AuthService,
              private router: Router,
              private authGuard: AuthGuard) {}

  ngOnInit(): void {
  }
  
  ngDoCheck(): void {
    
    this.auth = this.authService.statusAuthentication();

    this.favoriteTech = this.technologyFavorite();

  }

  logOut(){

    this.authService.logOut();
    this.router.navigateByUrl('/home');
  }

  technologyFavorite(){
    
    return JSON.parse(localStorage.getItem("likeTech"));
  }


}
