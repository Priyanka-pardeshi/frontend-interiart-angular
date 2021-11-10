import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder, Validators } from '@angular/forms';
import { SaveDataService } from 'src/services/save-data.service';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
quoteForm:FormGroup;
submitted = false;
  errorMessage: any;

  constructor(private fb:FormBuilder, private quote:SaveDataService) { }

  ngOnInit() {
    this.quoteForm=this.fb.group({
      name:['',Validators.required],
      phone:['',Validators.required],
      email:['',Validators.required,Validators.pattern("^[0-9a-zA-Z]+([.,+,_,-]{1}[0-9a-zA-Z]+)*@[0-9a-zA-Z]+[.]{1}[a-zA-Z]{2,3}([.]{1}[a-zA-Z]{2})?")],
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
    alert('SUCCESS!! \n\n' + JSON.stringify(this.quoteForm.value, null, 4));
  }

  get f() {
    return this.quoteForm.controls
  }
}
