import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, DoCheck {

  auth: boolean;

  constructor(private authService: AuthService,
              private router: Router) {}

  ngOnInit(): void {
  }

  ngDoCheck(): void {

    this.auth = this.authService.statusAuthentication();
    
  }

  logOut(){
    this.authService.logOut();
    this.router.navigateByUrl('/sign-up');
    this.auth = false;
  }


}
