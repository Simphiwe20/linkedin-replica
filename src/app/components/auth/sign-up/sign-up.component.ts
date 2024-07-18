import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
// import { CommonModule } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router'
import { ApiServicesService } from '../../../services/api-services/api-services.service';
import { SharedServiceService } from '../../../services/shared-services/shared-service.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [MatCardModule, MatInputModule, ReactiveFormsModule, MatSnackBarModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

  registerForm: FormGroup
  isSubmitted: boolean = false

  constructor(private routes: Router, private api:ApiServicesService, private snackBar: MatSnackBar, 
        private sharedService: SharedServiceService
  ) {
    this.registerForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required])
    })

    console.log(this.registerForm)

  }

  signIn() {
    this.routes.navigate(['/sign-in'])
  }

  submit() {
    console.log('Register form: ', this.registerForm)
    this.isSubmitted = true

    if(!this.registerForm.valid) return

    if(this.registerForm.value.confirmPassword != this.registerForm.value.password) {
      this.snackBar.open('Passwords doesn\'t match !!', 'OK', {duration: 3000})
      return
    }

    let userDetails = {
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName,
      email: this.registerForm.value.email,
      phoneNumber: this.registerForm.value.phoneNumber,
      password: this.registerForm.value.password
    }

    console.log('User details: ', userDetails)
    this.api.genericPost('signup', userDetails)
      .subscribe({
        next: (res) => {
          console.log(res)
          this.snackBar.open('You have successfuly registered', 'OK', {duration: 3000})
          this.routes.navigate(['/sign-in'])
        },
        error: (err) => {
          console.log(err)
          this.snackBar.open(err.error.message, 'OK', {duration: 3000})
        },
        complete: () => {}
      })

  }

}
