import { Component, OnInit } from '@angular/core';
import { TechnologyModel } from 'src/app/models/technology.model';
import { TecnologyListService } from 'src/app/services/tecnology-list.service';

@Component({
  selector: 'app-technology-list',
  templateUrl: './technology-list.component.html',
  styleUrls: ['./technology-list.component.css']
})
export class TechnologyListComponent implements OnInit {

  tech: TechnologyModel[] = [];
  searchTech: TechnologyModel[] = [];

  constructor( private techService: TecnologyListService) { }

  ngOnInit(): void {

    this.getTechnologyList();

  }

  getTechnologyList(){

    this.techService.getTechnologyList().subscribe( (resp: TechnologyModel[]) => {

      this.tech = resp;
    })
  }

  searchTechnology(search: string){

    if(search == ''){
      return;
    }

    this.searchTech = this.techService.searchTechnology(search, this.tech);
  }

  likeTech(item: TechnologyModel){

    this.techService.likeTech(item);
  }

}
