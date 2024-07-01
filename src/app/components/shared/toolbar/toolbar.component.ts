import { Component } from '@angular/core';
import { Homenu } from '../../../interfaces/homenu';

import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [ MatIconModule, MatInputModule, RouterModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

  constructor(private router: Router) {}

  menus: Homenu[] = [
    {name: 'Home', icon: 'home', routes: '/landing/home'},
    {name: 'My Network', icon: 'group', routes: '/landing/mynetwork'},
    {name: 'Jobs', icon: 'work', routes: '/landing/jobs'},
    {name: 'Messaging', icon: 'sms', routes: '/landing/messages'},
    {name: 'Notifications', icon: 'notifications', routes: '/landing/notifications'},
  ]

}
