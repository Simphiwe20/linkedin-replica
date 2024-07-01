import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input'
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcom-sign-in',
  standalone: true,
  imports: [MatInputModule],
  templateUrl: './welcom-sign-in.component.html',
  styleUrl: './welcom-sign-in.component.scss'
})
export class WelcomSignInComponent {

  constructor(private routes: Router) {}

  register() {
    this.routes.navigate(['/sign-up'])
  }

}
