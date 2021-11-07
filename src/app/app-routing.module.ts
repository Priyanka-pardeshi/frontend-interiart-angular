import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutInteriartComponent } from './components/about-interiart/about-interiart.component';
import { HomeComponent } from './components/home/home.component';
import { QuoteServiceComponent } from './components/quote-service/quote-service.component';
import { QuoteComponent } from './components/quote/quote.component';
import { TempComponent } from './components/temp/temp.component';

const routes: Routes = [
  {
    path:'home',component:HomeComponent
  },
  {
    path:'quote',component:QuoteComponent
  },
  {
    path:'about',component:AboutInteriartComponent
  },
  {
    path:'service',component:QuoteServiceComponent
  },
  { 
    path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path:'temp',component:TempComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
