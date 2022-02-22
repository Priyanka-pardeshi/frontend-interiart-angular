import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder, Validators } from '@angular/forms';
import { SaveDataService } from 'src/services/save-data.service';
import {MatSnackBar} from '@angular/material';
import { validateVerticalPosition } from '@angular/cdk/overlay';
 

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
quoteForm:FormGroup;
submitted = false;
  errorMessage: any;


  constructor(private fb:FormBuilder, private quote:SaveDataService, private snackbar:MatSnackBar) { }

  ngOnInit() {
    this.quoteForm=this.fb.group({
      name:['',[Validators.required,Validators.minLength]],
      phone:['',[Validators.required,Validators.pattern("^[0-9]{10}$")]],
      email:['',[Validators.required,Validators.email]],
      property:['',Validators.required],
      service:['',Validators.required],
      message:['',Validators.required]
    })
  }
  onSubmit() {
    this.submitted = true;
    if (this.quoteForm.valid) {
      this.quote.create(this.quoteForm.value).subscribe(
        data=>{
          console.log(data)

          console.log(this.quoteForm.value);
          this.snackbar.open('Record svaed!','',{
            duration:3000,
            verticalPosition:'top'
          
          });   
          
          
        },
        error =>{
          this.errorMessage = error.error.message 
          
        }
      )
      this.quoteForm.reset()
    }
    else{
      console.log(this.quoteForm.value);
      this.snackbar.open('Fill the form','',{
        duration:3000,
        verticalPosition:'top'      
      }); 
    }
  
  }

  get f() {
    return this.quoteForm.controls
  }
}

