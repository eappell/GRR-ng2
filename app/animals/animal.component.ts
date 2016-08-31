import { Component } from '@angular/core';
import { Animal } from './Animal';

@Component({
  selector: 'animal',
  template: `
    <h1>Animal Details</h1>
    <ul>
        <li *ngFor="let animal of animals">
            <span>
        </li>
    `
})

export class AnimalComponent {
  animals: Animal[] = [];
}
