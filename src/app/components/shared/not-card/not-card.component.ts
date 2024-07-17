import { Component } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-not-card',
  standalone: true,
  imports: [MatIconModule, MatCardModule],
  templateUrl: './not-card.component.html',
  styleUrl: './not-card.component.scss'
})
export class NotCardComponent {

  notOptions: any[] = [
    {name: 'All'},
    {name: 'My posts'},
    {name: 'Mentions'}
  ]

}
