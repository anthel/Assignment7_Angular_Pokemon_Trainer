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
    public hpStat: string = '';
    public attackStat: string = '';
    public defenceStat: string = '';
    
    
    constructor(private readonly collectedPokemonService: CollectedPokemonService) {
}

    /**
     * Displays all the caught pokemon togheter with some stats. 
     */
    ngOnInit(): void {
        this.collectedPokemonService.fetchPokemonPicture(this.chaughtPokemon.url)
        .subscribe(
          (pokemon: any) => {
            this.avatarCollectedUrl = pokemon.sprites.front_default;
            this.collectedPokemonId = pokemon.id;
            this.hpStat = pokemon.stats[0].base_stat;
            this.attackStat = pokemon.stats[1].base_stat;
            this.defenceStat = pokemon.stats[2].base_stat;
            
          }
        )
      }
}