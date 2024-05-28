import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillComponent } from '../skill/skill.component';
import { Developer } from '../models/developer.model';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-developer',
  standalone: true,
  imports: [SkillComponent, CommonModule],
  templateUrl: './developer.component.html',
  styleUrl: './developer.component.css'
})
export class DeveloperComponent {
  skills = [
    new Skill('Angular', 'https://angular.io/assets/images/logos/angular/angular.svg', 'angular.io'),
    new Skill('NodeJS', 'https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg', 'nodejs.org'),
    new Skill('C#', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Icon_2019.svg/1200px-Visual_Studio_Icon_2019.svg.png', 'visualstudio.com')
  ]
  daveTheDev = new Developer('Doe', 'John', 32, 'M', 'I am a developer', this.skills);
}
