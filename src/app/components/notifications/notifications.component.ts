import { Component } from '@angular/core';
import { NotCardComponent } from '../shared/not-card/not-card.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { NotSettingCardComponent } from '../shared/not-setting-card/not-setting-card.component';

import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [NotCardComponent, FooterComponent, NotSettingCardComponent, MatCardModule,MatIconModule],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent {

  notOptions: any[] = [
    {name: 'All'},
    {name: 'My posts'},
    {name: 'Mentions'}
  ]
}
