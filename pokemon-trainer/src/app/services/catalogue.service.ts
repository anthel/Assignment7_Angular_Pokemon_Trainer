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

    public fetchPokemons(): void {
        this.http.get<Pokemon[]>('https://pokeapi.co/api/v2/pokemon?limit=100')
        .subscribe((pokemons: any) => {
            this.pokemons = pokemons.results;
            console.log(pokemons);
            
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