import { Component, Input } from "@angular/core";
import { Pokemon } from "../models/pokemon";
import { CollectedPokemonService } from "../services/collected-pokemon.service";

@Component({
    selector: 'app-collected-pokemons',
    templateUrl: 'collected-pokemon.component.html',
    styleUrls: ['collected-pokemon.component.css']
})

export class CollectedPokemonsComponent {
    @Input() chaughtPokemon!: Pokemon;
    public avatarCollectedUrl: string = '';
    public collectedPokemonId: string = '';
    
    constructor(private readonly collectedPokemonService: CollectedPokemonService) {
}

    ngOnInit(): void {
        this.collectedPokemonService.fetchPokemonPicture(this.chaughtPokemon.url)
        .subscribe(
          (pokemon: any) => {
            this.avatarCollectedUrl = pokemon.sprites.front_default;
            this.collectedPokemonId = pokemon.id;
          }
        )
      }
}