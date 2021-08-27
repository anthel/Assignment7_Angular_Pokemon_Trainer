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

  //Fetches all of the picture for each pokemon using the url gotten in the first fetch.
  ngOnInit(): void {
    this.pokemonService.fetchPokemonPicture(this.pokemon.url) 
      .subscribe(
        (pokemon: any) => {
          this.avatarUrl = pokemon.sprites.front_default;
          this.pokemonId = pokemon.id;
        }
      )
      //gets all caught pokemons from localstorage and sets them to clicked, this so its only
      //possible to caught each pokemon once.
    const caughtPokemons: Pokemon[] = JSON.parse(localStorage.getItem("caught-pokemons") || "[]");
    for (let i = 0; i < caughtPokemons.length; i++) {
      if (this.pokemon.name === caughtPokemons[i].name) { //Checks if a pokemon is caught
        this.clicked = true;
        break;
      }
    }
  }
  //Clickevent that sets a pokemon to clicked if it hasn't been caught before.
  public onClick() {
    if (!this.clicked) {
      let caughtPokemons = JSON.parse(localStorage.getItem("caught-pokemons") || "[]");
      caughtPokemons.push(this.pokemon);
      localStorage.setItem("caught-pokemons", JSON.stringify(caughtPokemons));
    }
    this.clicked = true;
  }
}