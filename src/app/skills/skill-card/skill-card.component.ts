import { Component, Input, OnInit } from '@angular/core';
import { Skill } from '../skill';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss']
})
export class SkillCardComponent implements OnInit {

  @Input() skill: Skill | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  getLevelWidth(){
    return this.skill?.level + "%";
  }

  getLevelColor() {
    if (this.skill?.level) {
      if (this.skill?.level < 25) {
        return '#ff8c00';
      } else if (this.skill?.level < 50) {
        return '#ff0000';
      } else if (this.skill?.level < 75) {
        return "green";
      } else if (this.skill?.level < 100) {
        return "#00ff00";
      }
    }
    return "black"

  }

}
