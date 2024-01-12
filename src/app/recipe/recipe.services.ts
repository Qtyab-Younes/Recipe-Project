import { recipe } from './recipe-list/recipe.module';
import { EventEmitter } from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<recipe>();

  recipes: recipe[] = [
    new recipe(
      'RECIPE A',
      'DESCRIPTION BLA BLA ',
      'https://www.foodandwine.com/thmb/fVmYbaQzXCz1Prx8VxrW9sMcjMU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Braciole-FT-RECIPE1122-66acf49cef0e4390bec780945709e7f3.jpg'
    ),
    new recipe(
      'RECIPE B',
      'DESCRIPTION BLA BLA',
      'https://hips.hearstapps.com/hmg-prod/images/crepes-index-64347419e3c7a.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
