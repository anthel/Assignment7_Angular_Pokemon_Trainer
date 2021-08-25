import { Component, Input } from "@angular/core";
import { Pokemon } from "../models/pokemon";

@Component({
    selector: 'app-pokemons',
    templateUrl: 'pokemon.component.html',
    styleUrls: ['pokemon.component.css']
})

export class PokemonsComponent {
    @Input() pokemon: Pokemon | undefined;

    
}