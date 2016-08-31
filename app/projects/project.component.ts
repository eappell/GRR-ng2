import { Component } from '@angular/core';
import { Project } from './Project';

@Component({
  selector: 'project',
  template: `
    <h1>Project Details</h1>
    <ul>
        <li *ngFor="let project of projects">
            <span>
        </li>
    `
})

export class ProjectComponent {
  projects: Project[] = [];
}
