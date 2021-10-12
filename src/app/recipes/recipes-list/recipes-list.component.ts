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
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Flive.staticflickr.com%2F2754%2F4267958277_d82014cda4_b.jpg&imgrefurl=https%3A%2F%2Fwww.flickr.com%2Fphotos%2Fakatrya%2F4267958277&tbnid=J_bJHOcDdgB-6M&vet=12ahUKEwi28tD4jsTzAhUah_0HHYFuCNMQMygDegUIARCFAg..i&docid=YMzvXqGWvFaTUM&w=1024&h=768&itg=1&q=tarte%20aux%20pommes&hl=fr&ved=2ahUKEwi28tD4jsTzAhUah_0HHYFuCNMQMygDegUIARCFAg'
    )
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
