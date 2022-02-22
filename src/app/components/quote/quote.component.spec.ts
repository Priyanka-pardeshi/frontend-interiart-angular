import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { QuoteComponent } from "./quote.component"
import { SaveDataService } from 'src/services/save-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// verify component is working 
fdescribe('add  quote component to test', () => {
  //declare component variable of type quote
  let component: QuoteComponent;
  //env
  let fixture: ComponentFixture<QuoteComponent>;
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [QuoteComponent],
      imports: [FormsModule, ReactiveFormsModule,HttpClientTestingModule,MatSnackBarModule,BrowserAnimationsModule],
      providers:[SaveDataService]
    }).compileComponents();
  });
    beforeEach(() => {
    fixture = TestBed.createComponent(QuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  


  it("on submit submited value should be true", () => {
    component.onSubmit()
    expect(component.submitted).toEqual(true)
  });

  it('is quote component is define', () => {
    expect(component).toBeDefined();
  });
// method testing 
  it('on submit successfull', () => {
    component.onSubmit()
    expect(component.onSubmit).toBeTruthy();
  });

  //unit test
  //check empty form is valid or not
  // it('is form valid when empty', () => {

  //   component.quoteForm.setValue({
  //     name: 'veki',
  //     phone: 2567889985,
  //     email: 'eki@gmail.com',
  //     property: 'coommercial',
  //     service: 'lighting',
  //     message: 'good'
  //   })
  //   component.onSubmit()
  //   expect(component.quoteForm.valid).toBeTruthy();
  // });

})
















// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing'
// import { SaveDataService } from 'src/services/save-data.service';
// import { QuoteComponent } from './quote.component';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { quotes } from 'src/app/models/quote.mode';
// import { fail } from 'assert';
// import { error } from 'console';

// describe('QuoteComponent', () => {
//   let component: QuoteComponent;
//   let savedataservice:SaveDataService;
//   let fixture: ComponentFixture<QuoteComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports:[HttpClientTestingModule],
//       providers:[SaveDataService],
//       declarations: [ QuoteComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(QuoteComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

// //test to get quote from
// // it('Should test HttpClient.get',()=>{
// //   const testPost:quotes[]=[
// //     {name:'vishakha',phone:6587448875,email:'vish@gmail.com',property:'Commrcail',service:'Lighting',message:'nice'}
// //   ];
// //   savedataservice.create(testPost).subscribe((post)=>{
// //     expect(post).toBe(testPost);
// //   });
// //   const req=httptestcntrl.expectOne(savedataservice+'http://127.0.0.1:8000/saveData');

// //   expect(req.cancelled).toBeFalsy;
// //   expect(req.request.responseType).toEqual('json');
// //   req.flush(testPost);
// //   httptestcntrl.verify();
// // });

// //Test cases for handing 404 error
// // it('it should test 40',()=>{
// //   const erroeMessage='404 error is occured'
// //   savedataservice.create().subscribe((data)=>{
// //     fail('failedf with 404');

// //   },
// //   (error:HttpErrorResponse)=>{
// //     expect(error.status).toEqual(404);
// //     expect(error.error).toEqual(erroeMessage);
// //   } 
// //   );
// //   const req=httptestcntrl.expectOne(savedataservice+'http://127.0.0.1:8000/saveData');
// //   req.flush(erroeMessage,{status:404,statusText:'not found'})
// // });

// });
