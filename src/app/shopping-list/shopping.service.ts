import { EventEmitter } from '@angular/core';
import { Ingredient } from './../shared/ingredients.module';

export class ShoppingService {

ingredientsChanged = new EventEmitter<Ingredient[]>();
   private ingredients: Ingredient[] = [
        new Ingredient('lemon', 5),
        new Ingredient('potato', 2),
      ];

      getIngredients(){
        return this.ingredients.slice();
      }
      addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
      }
}