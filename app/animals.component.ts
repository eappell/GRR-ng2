import { Component } from '@angular/core';
import { http } from '@angular/http';

@Component({
    selector: 'animals',
    templateUrl : `animals.component.html`
})
export class AnimalsComponent {
  title = "Animals",
  collection = function(http){
    return http.get('./data/animals.json');
  }
}
