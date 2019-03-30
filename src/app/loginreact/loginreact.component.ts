import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName]; //local variable- control has details of password
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  }
}
export function emailPatternCheck() {
  return (formGroup: FormGroup) => {
    const email = formGroup.controls['email'];
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.errors) return
    // if there are no errors in the page, then it checks the e-mail pattern
    if (!re.test(email.value)) { //test is predefined method for checking
      email.setErrors({ customError: true })
    }
    else email.setErrors(null)
  }
}
@Component({
  selector: 'app-loginreact',
  templateUrl: './loginreact.component.html',
  styleUrls: ['./loginreact.component.css']
})
export class LoginreactComponent implements OnInit {
  registrationForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      //parameters
      //'' takes first entered value as default
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],

      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],

      email: ['', [Validators.required, Validators.email, Validators.pattern(/[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}/)]],

      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    },
      {
        validator: MustMatch('password', 'confirmPassword') // custom requirements
      }
    );
  }

  // convenience getter for easy access to form fields
  get f() { return this.registrationForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registrationForm.invalid) {
      return;
    }

    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
    console.log(this.registrationForm.value)
  }
}