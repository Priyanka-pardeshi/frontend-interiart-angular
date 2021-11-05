import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutInteriartComponent } from './components/about-interiart/about-interiart.component';
import { HomeComponent } from './components/home/home.component';
import { QuoteComponent } from './components/quote/quote.component';

const routes: Routes = [
  {
    path:'home',component:HomeComponent
  },
  {
    path:'quote',component:QuoteComponent
  },
  {
    path:'about',component:AboutInteriartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
