import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { HeroesService } from "../../services/heroes.service";

@Component({
  selector: 'app-heroe-found',
  templateUrl: './heroe-found.component.html',
  styles: []
})
export class HeroeFoundComponent implements OnInit {

  heroes:any [] = [];
  termino:string;

  constructor(private router :ActivatedRoute,
              private _heroeService: HeroesService) 
  {
    this.router.params.subscribe( params=>{
      this.termino = (params['termino']);
      this.heroes = this._heroeService.buscarHeroes( params['termino']);
      console.log(this.heroes);
     
    })

  }

  ngOnInit(): void {
  }

  findHeroe(){

  }

}
