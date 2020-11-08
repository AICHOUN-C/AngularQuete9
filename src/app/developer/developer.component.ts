import { Component, OnInit } from '@angular/core';
import { Developer } from '../common/developer.model';
import { Skill } from '../common/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent implements OnInit {

  myDeveloper: Developer;

  constructor() { }

  ngOnInit(): void {
  const devSkill = new Skill();
  devSkill.name = 'Angular';
  devSkill.logo = 'http://aichoun.com/img/ninja.png'
  devSkill.site = 'https://angular.io/'
  console.log(devSkill);

  this.myDeveloper = new Developer();
  this.myDeveloper.firstName = 'John';
  this.myDeveloper.lastName = 'Doe';
  this.myDeveloper.age = 99;
  this.myDeveloper.sex = 'H';
  this.myDeveloper.bio = 'Ninja Developer';
  this.myDeveloper.skills = [devSkill];
  }

}
