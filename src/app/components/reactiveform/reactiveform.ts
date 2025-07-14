import { Component } from '@angular/core';
import {  Form, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  imports: [ReactiveFormsModule],
  templateUrl: './reactiveform.html',
  styleUrl: './reactiveform.css'
})
export class Reactiveform {
     userForm : FormGroup=new FormGroup({
     fName: new FormControl("",[Validators.required,Validators.minLength(3)]),
     lName: new FormControl("",[Validators.required,Validators.minLength(3)]),
     userName: new FormControl(""),
    city: new FormControl(""),
    state: new FormControl("Goa"),
    zip: new FormControl(),
    isAggree: new FormControl (false)
     });
     constructor(){
      this.userForm.controls['state'].disable();
      setTimeout(()=>{
        this.userForm.controls['state'].enable();
      },5000)
      const isValid=this.userForm.valid;
     }
     onSubmit() {
      
      const formValue = this.userForm.value;
      debugger;
     }  
}
