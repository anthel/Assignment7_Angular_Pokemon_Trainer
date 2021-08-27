import { Component } from "@angular/core";

@Component({
    selector: 'app-collected-list',
    templateUrl: 'collected-list.component.html',
    styleUrls: ['collected-list.component.css']
})

export class CollectedListComponent {
    public caughtPokemons = JSON.parse(localStorage.getItem("caught-pokemons") || "[]"); //Gets all the caught pokemons
}