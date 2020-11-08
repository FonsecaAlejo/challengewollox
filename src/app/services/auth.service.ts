import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {

    this.readToken();

  }

  private url = "http://private-8e8921-woloxfrontendinverview.apiary-mock.com"

  userToken: string;

 //SignIn
  // http://private-8e8921-woloxfrontendinverview.apiary-mock.com/login

  signUp( user: UserModel){

    return this.http.post(
      `${this.url}/signup`,
      user
    ).pipe(
      map(resp => {
        console.log("Entro en el mapa de rxjs")
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

    return this.userToken.length > 2;

  }
}
