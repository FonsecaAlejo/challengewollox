import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor() { }

  getCountries(){
    return this.countries;
}

  countries: Country[] = [
        
    {
      name: 'Argentina',
      provinces: [
        'Buenos Aires',
        'Tucumán',
        'Cordoba',
        'Mendoza',
        'Salta'
      ]
    },
    {
      name: 'Brasil',
      provinces: [
        'São Paulo',
        'Río de Janeiro',
        'Santa Catarina',
        'Paraná',
        'Mato Grosso'
      ]
    },
    {
      name: 'Chile',
      provinces: [
        'Santiago',
        'La Serena',
        'Cuyo',
        'Chillán',
        'Valdivia'
      ]
    },
    {
      name: 'Colombia',
      provinces: [
        'Bogotá',
        'La Serena',
        'Cuyo',
        'Chillán',
        'Valdivia'
      ]
    },
    {
      name: 'Uruguay',
      provinces: [
        'Montevideo',
        'San José',
        'Soriano',
        'Tacuarembó',
        'Florida'
      ]
    }
  ];

}

export interface Country {
  name: string;
  provinces: string[];
}
