import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  
  }
  toHome(){
    document.getElementById("home").scrollIntoView({behavior:"smooth"});
  }
  toAbout(){
    document.getElementById("about").scrollIntoView({behavior:"smooth"});
  }
  toService(){
    document.getElementById("interiart-service").scrollIntoView({behavior:"smooth"});
  }
}
