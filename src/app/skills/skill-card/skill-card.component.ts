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

}
