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
      'title':'INTERIAL SERVICE',
      'about':'Interior design services offer a vast variety of solutions for our clients’ homes and offices.'
    },
    {
      'img':'/assets/interial.jpg',
      'title':'DECORATIVE SERVICE',
      'about':'Our professional decorators will be happy to help you change your house’s inner look.'
    },
    {
      'img':'/assets/interial.jpg',
      'title':'SPACE PLANING',
      'about':'We create better interior experiences through our space planning services.'
    },
    {
      'img':'/assets/interial.jpg',
      'title':'PROJECT MANAGEMENT',
      'about':'We provide proper project management as it’s one of the main success factors in interior design.'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
