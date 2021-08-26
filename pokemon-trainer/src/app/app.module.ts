import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogueListComponent } from './catalogue/catalogue-list/catalogue-list.component';
import { CataloguePage } from './catalogue/catalogue.page';
import { PokemonsComponent } from './catalogue/pokemons/pokemon.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CollectedListComponent } from './trainer-page/collected-list/collected-list.component';
import { CollectedPokemonsComponent } from './trainer-page/collected-pokemons/collected-pokemon.component';
import { TrainerPageComponent } from './trainer-page/trainer-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    TrainerPageComponent,
    CatalogueListComponent,
    CataloguePage,
    PokemonsComponent,
    CollectedListComponent,
    CollectedPokemonsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
