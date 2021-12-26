import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Skill } from './skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills: Skill[] = [];

  expanded: any = {
    "item1": false,
    "item2": false,
    "item3": false,
    "item4": false,
  }

  constructor(public elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.skills = [
      {
        image: "assets/angular.png",
        name: "Angular",
      },
      {
        image: "assets/nodejs.png",
        name: "Node.js",
      },
      {
        image: "assets/flutter.png",
        name: "Flutter",
      },
      {
        image: "assets/kubernetes.png",
        name: "Kubernetes",
      },
      {
        image: "assets/unity.png",
        name: "Unity",
        level: 70,
      },
      {
        image: "assets/docker.png",
        name: "Docker",
        level: 70,
      },
      {
        image: "assets/spring.png",
        name: "Spring",
        level: 70,
      },
      {
        image: "assets/firebase.png",
        name: "Firebase",
        level: 70,
      },
      {
        image: "assets/aws.png",
        name: "AWS",
        level: 70,
      },
      {
        image: "assets/python.png",
        name: "Python",
        level: 70,
      },
    ];
  }

  onItemClick(event: any) {
    console.log(event.target)
    const clickedElement: HTMLElement | null | undefined = document.getElementById(event.target.id);
    if (clickedElement?.id[0] != 'i') {
      return;
    }
    let elements: NodeListOf<Element> = document.querySelectorAll('.item');

    if (!clickedElement?.classList.contains("w70")) {
      elements.forEach((element: Element) => {element.classList.add("w10")})
      clickedElement?.classList.remove("w10");
      elements.forEach((element: Element) => {element.classList.remove("w70")})
      clickedElement?.classList.add("w70");
      this.activate(clickedElement.id);

    } else {
      elements.forEach((element: Element) => {element.classList.remove("w10", "w70")})
      this.deactivateAll();
    }

  }

  activate(itemId: string) {
    this.deactivateAll();
    this.expanded[itemId] = true;
  }

  deactivateAll() {
    for (const [key, value] of Object.entries(this.expanded)) {
      this.expanded[key] = false;
    }

  }

}
