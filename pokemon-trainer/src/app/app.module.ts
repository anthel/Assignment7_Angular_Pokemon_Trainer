import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { TrainerPageComponent } from './trainer-page/trainer-page.component';
import { HttpClientModule } from '@angular/common/http';
import { CatalogueListComponent } from './catalogue-list/catalogue-list.component';
import { CataloguePage } from './catalogue/catalogue.page';
import { PokemonsComponent } from './pokemons/pokemon.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    TrainerPageComponent,
    CatalogueListComponent,
    CataloguePage,
    PokemonsComponent,
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
