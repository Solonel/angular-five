import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './data/in-memory-data.service';
import { AppRoutingModule }     from './app-routing.module';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './heroes-cmp/hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes-cmp/heroes/heroes.component';
import { HeroSearchComponent }  from './heroes-cmp/hero-search/hero-search.component';
import { HeroService }          from './services/hero.service';
import { MessageService }       from './services/message.service';
import { RecipeService }       from './services/recipe.service';
import { IngredientService }       from './services/ingredient.service';
import { MessagesComponent }    from './messages/messages.component';
import { AddRecipeComponent } from './recipes-cmp/add-recipe/add-recipe.component';
import { AddIngredientComponent } from './add-ingredient/add-ingredient.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    AddRecipeComponent,
    AddIngredientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [HeroService, MessageService, RecipeService, IngredientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
