import { Component, Input } from '@angular/core';
import { recipe } from '../recipe-list/recipe.module';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent {
@Input() recipe !: recipe;
}
