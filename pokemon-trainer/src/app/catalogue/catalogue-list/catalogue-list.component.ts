import { Component } from "@angular/core";
import { CatalogueService } from '../services/catalogue.service';
import { Pokemon } from '../models/pokemon';
@Component({
    selector: 'app-catalogue-list',
    templateUrl: 'catalogue-list.component.html',
    styleUrls: ['catalogue-list.component.scss']
})

export class CatalogueListComponent {
    constructor(
        private readonly catalogueService: CatalogueService){}

    ngOnInit(): void {
        this.catalogueService.fetchPokemons();
    }
    get pokemons(): Pokemon[] {
        return this.catalogueService.getPokemons();
    }

}