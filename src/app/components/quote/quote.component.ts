import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
quoteForm:FormGroup;
submitted = false;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.quoteForm=this.fb.group({
      name:['',Validators.required],
      number:['',Validators.required],
      email:['',Validators.required]
    })
  }
  onSubmit() {
    this.submitted = true;
    if (this.quoteForm.valid) {
      //console.log(this.quoteForm.value);
      return;
    }
    alert('SUCCESS!! \n\n' + JSON.stringify(this.quoteForm.value, null, 4));
  }

  get f() {
    return this.quoteForm.controls
  }
}
