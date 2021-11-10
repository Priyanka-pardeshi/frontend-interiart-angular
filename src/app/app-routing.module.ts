import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutInteriartComponent } from './components/about-interiart/about-interiart.component';
import { AddressComponent } from './components/address/address.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
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
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path:'temp',component:TempComponent
  },
  {
    path:'menu',component:MenuComponent
  },
  {
    path:'address',component:AddressComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
