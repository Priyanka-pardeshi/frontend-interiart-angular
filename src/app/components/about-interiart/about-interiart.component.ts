import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-interiart',
  templateUrl: './about-interiart.component.html',
  styleUrls: ['./about-interiart.component.scss']
})
export class AboutInteriartComponent implements OnInit {
  information: any[] = [
    {
      'img': '/assets/interial.jpg',
      'title': 'RECIDENCIAL DESIGN',
      'about': 'Our residential interior design services are perfect for creating a cozy atmosphere in your house regardless of its size.'
    },
    {
      'img': '/assets/interial.jpg',
      'title':'COMMERCIAL DESIGN',
      'about': 'We take a dedicated approach to help our commercial clients create the interior for their company offices and other spaces.'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
