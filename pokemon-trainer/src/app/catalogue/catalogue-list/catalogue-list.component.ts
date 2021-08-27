import { Component } from "@angular/core";
import { CatalogueService } from '../services/catalogue.service';
import { Pokemon } from '../models/pokemon';
@Component({
    selector: 'app-catalogue-list',
    templateUrl: 'catalogue-list.component.html',
    styleUrls: ['catalogue-list.component.css']
})

export class CatalogueListComponent {
    constructor(
        private readonly catalogueService: CatalogueService){}
    
    //starts the fetch of the pokemons
    ngOnInit(): void {
        this.catalogueService.fetchPokemons();
    }

    // gets the array with all of the fetch pokemons
    get pokemons(): Pokemon[] {
        return this.catalogueService.getPokemons();
    }

}