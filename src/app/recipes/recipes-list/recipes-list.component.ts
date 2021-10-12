import { isLoweredSymbol } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  // An array of Recipes Objects
  recipes: Recipe[] = [
    new Recipe(
      'Tarte au pomme',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/600px-Recipe_logo.jpeg'
    ),
    new Recipe(
      'Tarte au pomme',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/600px-Recipe_logo.jpeg'
    ),
    new Recipe(
      'Tarte au pomme',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/600px-Recipe_logo.jpeg'
    )
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
