import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-service',
  templateUrl: './quote-service.component.html',
  styleUrls: ['./quote-service.component.scss']
})
export class QuoteServiceComponent implements OnInit {
  service_information:any[]=[
    {
      'img':'/assets/interial.jpg',
      'title':'Interial design',
      'about':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quam optio placeat perspiciatis nihil qu'
    },
    {
      'img':'/assets/interial.jpg',
      'title':'Interial design',
      'about':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quam optio placeat perspiciatis nihil qu'
    },
    {
      'img':'/assets/interial.jpg',
      'title':'Interial design',
      'about':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quam optio placeat perspiciatis nihil qu'
    },
    {
      'img':'/assets/interial.jpg',
      'title':'Interial design',
      'about':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quam optio placeat perspiciatis nihil qu'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
