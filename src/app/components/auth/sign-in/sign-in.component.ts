import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input'
import { Router } from '@angular/router';

import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ApiServicesService } from '../../../services/api-services/api-services.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [MatCardModule, MatInputModule, FormsModule, CommonModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {

  constructor(private routes: Router, private api: ApiServicesService, private snackBar: MatSnackBar) {}
  userCredentials = {email: '', password: ''}
  isSubmitted: boolean = false

  register() {
    this.routes.navigate(['/sign-up'])
  }

  submit(form: NgForm) {
    this.isSubmitted = true

    console.log(form)
    console.log(this.snackBar)

    if(form.invalid) return

    this.api.genericPost('login', this.userCredentials)
      .subscribe({
        next: (res) => {
          console.log(res)
          this.routes.navigate(['/landing'])
          sessionStorage.setItem('loggedInUser', JSON.stringify(res))
        },
        error: (err) => {
          this.snackBar.open(err.error.message, 'OK', {duration: 3000})
          console.log(err)
          
        },
        complete: () => {console.log('Complete')},
      })
  }

}
