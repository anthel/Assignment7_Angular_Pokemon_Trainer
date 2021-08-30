import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogueListComponent } from './catalogue-page/catalogue-list/catalogue-list.component';
import { CataloguePage } from './catalogue-page/catalogue.page';
import { PokemonsComponent } from './catalogue-page/pokemons/pokemon.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatButtonModule } from '@angular/material/button';
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
    BrowserAnimationsModule,
    TextFieldModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
