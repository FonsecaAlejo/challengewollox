import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }

  passwordsEqual(pass1: string , pass2: string){

    return (form: FormGroup) => {

      const pass1Control = form.controls[pass1];
      const pass2Control = form.controls[pass2];

      if(pass1Control.value === pass2Control.value){
        pass2Control.setErrors(null);
      }else{
        pass2Control.setErrors({ noEqual: true });
      }
    }
  }
}
