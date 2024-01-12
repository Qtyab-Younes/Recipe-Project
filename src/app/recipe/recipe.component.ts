import { recipe } from './recipe-list/recipe.module';
import { Component } from '@angular/core';
import { RecipeService } from './recipe.services';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css',
  providers: [RecipeService],
})
export class RecipeComponent {
  recipeStockHere!: recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe((Recipe: recipe) => {
      this.recipeStockHere = Recipe;
    });
  }
}
