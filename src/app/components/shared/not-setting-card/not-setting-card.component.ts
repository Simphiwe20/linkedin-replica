import { Component } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-not-setting-card',
  standalone: true,
  imports: [MatIconModule, MatCardModule],
  templateUrl: './not-setting-card.component.html',
  styleUrl: './not-setting-card.component.scss'
})
export class NotSettingCardComponent {

}
