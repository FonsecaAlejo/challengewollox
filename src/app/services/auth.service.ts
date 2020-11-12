import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { map } from "rxjs/operators";
import { environment } from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {

    this.readToken();

  }

  userToken: string;

 //SignIn
  // http://private-8e8921-woloxfrontendinverview.apiary-mock.com/login

  signUp( user: UserModel){

    return this.http.post(
      environment.endPointSignUp,
      user
    ).pipe(
      map(resp => {
        this.saveToken(resp['token']);
        return resp;
      })
    )

  }

  saveToken( token: string ){

    this.userToken = token;
    localStorage.setItem('token', token);

  }

  logOut(){
    localStorage.removeItem('token');
  }

  readToken (){

    if( localStorage.getItem('token') ){
      this.userToken = localStorage.getItem('token');
    }else{
      this.userToken = '';
    }

    return this.userToken;
  }

  statusAuthentication(){

    if( this.userToken === localStorage.getItem('token') ){

      return true;

    }

    return false;

  }
}
