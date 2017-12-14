import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../classes/recipe';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  constructor(private recipeService : RecipeService) { }

  ngOnInit() {

  }

 // add(name: string): void {
     ///name = name.trim();
    //if (!name) { return; }


   // this.recipeService.addRecipe({ name } as Recipe)
 // }

}



 

 
