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
      'about': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam dolor eum, obcaecati voluptas magnam voluptatem neque? Itaque minima excepturi dolores simi.'
    },
    {
      'img': '/assets/interial.jpg',
      'title':'COMMERCIAL DESIGN',
      'about': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam dolor eum, obcaecati voluptas magnam voluptatem neque? Itaque minima excepturi dolores simi.'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
