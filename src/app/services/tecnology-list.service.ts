import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TechnologyModel } from '../models/technology.model';
import { environment } from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class TecnologyListService {

  arrayTech: string[] = [];


  constructor( private http: HttpClient) { }

  


  getTechnologyList(){

    return  this.http.get(environment.endPointTechnologyList);
  }

  searchTechnology(search: string, technologies: TechnologyModel[]){
    
    let techArr: TechnologyModel[] = [];

    search = search.toLowerCase();
    
    for (let tecnology of technologies) {

      let tech = tecnology.tech.toLowerCase();
      let type = tecnology.type.toLowerCase();

      if(tech.indexOf(search) != -1){
        
        techArr.push(tecnology);
      }

      if(type.indexOf(search) != -1){
        
        techArr.push(tecnology);
      }

    }

    return techArr;
  }

  likeTech(item: TechnologyModel){

    let equal = false
    let techStorage = JSON.parse(localStorage.getItem("likeTech"));

    if( techStorage == null){ //Asigna si no hay ninguna

      this.arrayTech.push(item.tech);
      
    }else{
      
      this.arrayTech = techStorage;

      
      for (let tech of techStorage) {

        if( tech == item.tech){ //Encuentra repetida

          equal = true;
          break;
        }
                
      }
      
      if(equal == false){
        this.arrayTech.push(item.tech);
      }
      
    }
    
    localStorage.setItem("likeTech", JSON.stringify(this.arrayTech));
  }

}
