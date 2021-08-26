import { Component, Input } from "@angular/core";
import { Pokemon } from "../models/pokemon";
import { PokemonService } from "../services/pokemon.service";

@Component({
    selector: 'app-pokemons',
    templateUrl: 'pokemon.component.html',
    styleUrls: ['pokemon.component.css']
})

export class PokemonsComponent {
    @Input() pokemon!: Pokemon;
    public avatarUrl: string = '';
    public pokemonId: string = '';
    public clicked: boolean = false;
    
    constructor(private readonly pokemonService: PokemonService) {
}

    ngOnInit(): void {
        this.pokemonService.fetchPokemonPicture(this.pokemon.url)
        .subscribe(
          (pokemon: any) => {
            this.avatarUrl = pokemon.sprites.front_default;
            this.pokemonId = pokemon.id;
            console.log(pokemon.id)
          }
        )
      }

      public onClick() {
        if(!this.clicked) {
          let caughtPokemons = JSON.parse(localStorage.getItem("caught-pokemons") || "[]");
          caughtPokemons.push(this.pokemon);
          localStorage.setItem("caught-pokemons", JSON.stringify(caughtPokemons));
        }
        this.clicked = true;
      }
}