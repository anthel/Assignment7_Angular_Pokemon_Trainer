import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
}) 

export class CollectedPokemonService {
    private pokemon: any = {};
    private error: string = "";
  
    constructor(private readonly http: HttpClient) { }
  
    //Using the url got from the first fetch to be able to get other useful information from the pokemon. 
    public fetchPokemonPicture(url: string): Observable<string> {
      return this.http.get<string>(url);
    }
}