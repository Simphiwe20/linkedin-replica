import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
// import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'
import { ApiServicesService } from '../../../services/api-services/api-services.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [MatCardModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

  registerForm: FormGroup
  isSubmitted: boolean = false

  constructor(private routes: Router, private api:ApiServicesService) {
    this.registerForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required])
    })
  }

  signIn() {
    this.routes.navigate(['/sign-in'])
  }

  submit() {
    console.log('Register form: ', this.registerForm)
    this.isSubmitted = true

    if(!this.registerForm.valid) return

    this.api.genericPost('signup', this.registerForm.value)
      .subscribe({
        next: (res) => {
          console.log('')
        },
        error: () => {},
        complete: () => {}
      })

  }

}
