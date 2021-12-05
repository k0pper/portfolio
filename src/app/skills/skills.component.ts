import { Component, OnInit } from '@angular/core';
import { Skill } from './skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills: Skill[] = [];

  constructor() { }

  ngOnInit(): void {
    this.skills = [
      {
        image: "assets/angular.png",
        name: "Angular",
        level: "11",
      },
      {
        image: "assets/nodejs.png",
        name: "Node.js",
        level: "12",
      },
      {
        image: "assets/flutter.png",
        name: "Flutter",
        level: "12",
      },
      {
        image: "assets/kubernetes.png",
        name: "Kubernetes",
        level: "12",
      },
      {
        image: "assets/unity.png",
        name: "Unity",
        level: "12",
      },
      {
        image: "assets/docker.png",
        name: "Docker",
        level: "12",
      },
      {
        image: "assets/spring.png",
        name: "Spring",
        level: "12",
      },
      {
        image: "assets/firebase.png",
        name: "Firebase",
        level: "12",
      },
      {
        image: "assets/aws.png",
        name: "AWS",
        level: "12",
      },
      {
        image: "assets/python.png",
        name: "Python",
        level: "12",
      },
    ];
  }

}
