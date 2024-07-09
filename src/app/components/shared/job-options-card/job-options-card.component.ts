import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { Menu } from '../../../interfaces/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-job-options-card',
  standalone: true,
  imports: [ MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './job-options-card.component.html',
  styleUrl: './job-options-card.component.scss'
})
export class JobOptionsCardComponent {

  items: Menu[] = [
    {itemName: 'My jobs', icon: 'bookmark', route: ''},
    {itemName: 'Preferences', icon: 'list', route: ''},
    {itemName: 'Interview Prep', icon: 'description', route: ''},
    {itemName: 'Job seeker guadance', icon: 'smart_display', route: ''}
  ]

}
