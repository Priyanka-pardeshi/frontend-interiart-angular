import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { QuoteComponent } from './components/quote/quote.component';
import { AboutInteriartComponent } from './components/about-interiart/about-interiart.component';
import { QuoteServiceComponent } from './components/quote-service/quote-service.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { TempComponent } from './components/temp/temp.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './components/menu/menu.component';
import { PortpholioComponent } from './components/portpholio/portpholio.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuoteComponent,
    AboutInteriartComponent,
    QuoteServiceComponent,
    TempComponent,
    MenuComponent,
    PortpholioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
