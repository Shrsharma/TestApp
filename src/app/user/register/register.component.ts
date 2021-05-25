import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formSubmitted: boolean;
  formControls:any;


  constructor( private formBuilder: FormBuilder) {}

  signupForm: FormGroup;
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fName: ['', Validators.required],
      lName: ['', Validators.required],
      email: ['',[Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]

    })
    this.formControls=this.signupForm.controls;

  }

  handleFormSubmit() {
    this.formSubmitted=true;
    if (this.signupForm.invalid) 
    {
      return;
    } 
    else 
    {
      alert("Form submitted");
    }
  }

}

