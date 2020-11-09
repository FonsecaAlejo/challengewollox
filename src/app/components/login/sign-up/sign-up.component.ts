import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from "@angular/forms";
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { CountriesService, Country } from 'src/app/services/countries.service';
import { ValidatorsService } from 'src/app/services/validators.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  usuario: UserModel = new UserModel();
  form: FormGroup;
  countries: Country[];
  provinces: string[];
  disabledProv: boolean = true

  constructor( private fb: FormBuilder, 
               private countriesService: CountriesService,
               private validatorsService: ValidatorsService,
               private authService: AuthService,
               private router: Router) {

    this.creationForm();
    this.getCountries();

   }

  ngOnInit(): void {
  }

  //Metodos para activar estilos de validacion

  get nameInvalid(){
    return this.form.get('name').invalid && this.form.get('name').touched;
  }

  get lastNameInvalid(){
    return this.form.get('lastName').invalid && this.form.get('lastName').touched;
  }

  get countryInvalid(){
    return this.form.get('country').invalid && this.form.get('country').touched;
  }

  get provinceInvalid(){
    return this.form.get('province').invalid && this.form.get('province').touched;
  }

  get emailInvalid(){
    return this.form.get('email').invalid && this.form.get('email').touched;
  }

  get phoneInvalid(){
    return this.form.get('phone').invalid && this.form.get('phone').touched;
  }

  get passInvalid(){
    return this.form.get('password').invalid && this.form.get('password').touched;
  }

  get confirmPassInvalid(){
    const pass1 = this.form.get('password').value;
    const pass2 = this.form.get('confirmPassword').value;

    return ( pass1 === pass2 ) ? false : true
  }

  get aceptConditionsInvalid(){
    return this.form.get('aceptConditions').invalid && this.form.get('aceptConditions').touched;
  }

  creationForm(){
    this.form = this.fb.group({
      name: ['' , [Validators.required, Validators.minLength(3), Validators.maxLength(30)] ],
      lastName: ['' , [Validators.required, Validators.minLength(3), Validators.maxLength(30)] ],
      country: [null , Validators.required],
      province: [null , Validators.required],
      email: ['' , [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")] ], //Patrón para correo electronico
      phone: ['' , [Validators.required, Validators.maxLength(10), Validators.pattern("[0-9]{2,10}")] ],
      password: ['' , [Validators.required, Validators.pattern("(?=.*[0-9])(?=.*[a-z]).{6,}") ] ], //Patrón que debe contener al menos un carácter y un número debe ser por lo menos de 6 números
      confirmPassword: ['' , [Validators.required, Validators.minLength(6)] ],
      aceptConditions: [false , Validators.requiredTrue ]
    },
    {
      validators: this.validatorsService.passwordsEqual ('password', 'confirmPassword')
    });
  }

  getCountries(){

    this.countries = this.countriesService.getCountries();
    
  }

  getProvinces(item: Country){

    this.form.controls['province'].setValue(null); //Reset en el valor del campo province
    
    if( item == null){
     
      this.disabledProv = true;
      return

    }else{

      this.provinces = item.provinces;
      this.disabledProv = false;
    }

  }

  onSubmit(){

    if (this.form.valid){

      this.usuario.name = this.form.value.name;
      this.usuario.lastName =  this.form.value.lastName;
      this.usuario.country =  this.form.value.country.name;
      this.usuario.province =  this.form.value.province;
      this.usuario.email =  this.form.value.email;
      this.usuario.phone =  this.form.value.phone;
      this.usuario.password =  this.form.value.password;

      this.authService.signUp(this.usuario).subscribe( data => {
        this.router.navigateByUrl('/technology-list');
      }, (error) => {
        console.log("Error al autenticar")
      });

    }

  }

}
