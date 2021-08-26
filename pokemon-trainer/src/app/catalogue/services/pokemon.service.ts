import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
}) 

export class PokemonService {
    private pokemon: any = {};
    private error: string = "";
  
    constructor(private readonly http: HttpClient) { }
  
    public fetchPokemonPicture(url: string): Observable<string> {
      return this.http.get<string>(url);
    }
}