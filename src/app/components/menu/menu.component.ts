import { Component, OnInit } from '@angular/core';
interface NavbarItems {
  title: string;
  route: string;
  isSelected: boolean;
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  navrbarItems: NavbarItems[] = [
    {
      title: 'HOME',
      route: 'home',
      isSelected: true
    },
    {
      title: 'ABOUT',
      route: 'about',
      isSelected: false
    },
    {
      title: 'SERVICE',
      route: 'interiart-service',
      isSelected: false
    },
    {
      title: 'PORTFOLIO',
      route: 'portfolio',
      isSelected: false
    }, 
    {
      title: 'TESTIMONAL',
      route: '',
      isSelected: false
    },
    {
      title: 'TEAM',
      route: '',
      isSelected: false
    }, {
      title: 'NEWS',
      route: '',
      isSelected: false
    },
    {
      title: 'CONTACTUS',
      route: '',
      isSelected: false
    }
  ]
  constructor() { }

  ngOnInit() {

  }
  jumpTo(path: string): void {
    this.navrbarItems = this.navrbarItems.map((item) => {
      return {
        ...item,
        isSelected: item.route === path
      }
    });
    document.getElementById(path).scrollIntoView({ behavior: "smooth" });
  }
}
