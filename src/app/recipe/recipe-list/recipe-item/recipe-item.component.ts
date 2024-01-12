import { RecipeService } from '../../recipe.services';
import { recipe } from './../recipe.module';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css',
})
export class RecipeItemComponent {  
  @Input() Recipe!: recipe;

  constructor(private recipeService: RecipeService) {}
  OnInit() {}

  onSelected() {
    this.recipeService.recipeSelected.emit(this.Recipe);
  }
}
