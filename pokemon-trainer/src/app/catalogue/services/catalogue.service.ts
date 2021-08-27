import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Pokemon } from "../models/pokemon";

@Injectable({
    providedIn: 'root'
}) 

export class CatalogueService {
    private pokemons: Pokemon[] = [];
    private error: string = '';

    constructor(private readonly http: HttpClient) {
    }

    //fetches the first 100 pokemons in the pokedeck. This to make it lag less. Just to visualize
    public fetchPokemons(): void {
        this.http.get<Pokemon[]>('https://pokeapi.co/api/v2/pokemon?limit=100')
        .subscribe((pokemons: any) => {
            this.pokemons = pokemons.results;
        }, (error: HttpErrorResponse) => {
            this.error = error.message;
        })

    }
    public getPokemons(): Pokemon[] {
        return this.pokemons;
    }
    public getError(): string {
        return this.error;
    }
}