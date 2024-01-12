import { RecipeService } from './../recipe.services';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { recipe } from './recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  recipes!: recipe[] 

  constructor(private recipeService : RecipeService) {}
  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }


}
