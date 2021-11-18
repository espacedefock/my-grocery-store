import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
      new Recipe(
        'Tarte au pomme',
        'La tarte au pomme lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/600px-Recipe_logo.jpeg',
        [
          new Ingredient('milk', 1),
          new Ingredient('apple', 10)
        ]
      ),
      new Recipe(
        'Tarte au poire',
        'La tarte au poire lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/600px-Recipe_logo.jpeg',
        [
          new Ingredient('milk', 1),
          new Ingredient('poire', 10)
        ]
      ),
      new Recipe(
        'Tarte au prune',
        'La tarte au prune lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/600px-Recipe_logo.jpeg',
        [
          new Ingredient('milk', 1),
          new Ingredient('prune', 10)
        ]
      )
  ];

  getRecipes(){
      return this.recipes.slice();
  }

}