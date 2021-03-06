import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SaveDataService } from 'src/services/save-data.service';

@Component({
  selector: 'app-tempcomp',
  templateUrl: './tempcomp.component.html',
  styleUrls: ['./tempcomp.component.scss']
})
export class TempcompComponent implements OnInit {
  quoteForm:FormGroup;
  submitted = false;
    errorMessage: any;
  
  constructor(private fb:FormBuilder, private quote:SaveDataService) { }

  ngOnInit() {
    this.quoteForm=this.fb.group({
      name:['',[Validators.required,Validators.minLength]],
      phone:['',Validators.required],
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
        },
        error =>{
          this.errorMessage = error.error.message 
        }
        
      )
    }
    //alert('SUCCESS!! \n\n' + JSON.stringify(this.quoteForm.value, null, 4));
    console.log(this.quoteForm.value);
    this.quoteForm.reset();
  }

  get f() {
    return this.quoteForm.controls
  }
}


