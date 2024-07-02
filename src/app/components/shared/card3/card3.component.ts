import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { count } from 'rxjs';


@Component({
  selector: 'app-card3',
  standalone: true,
  imports: [ MatCardModule, MatIconModule ],
  templateUrl: './card3.component.html',
  styleUrl: './card3.component.scss'
})
export class Card3Component {

  items: any[] = [
    {icon: 'group', name: 'Connection', count: 279},
    {icon: 'person', name: 'Following & followers', count: ''},
    {icon: 'groups', name: 'Groups', count: ''},
    {icon: 'calendar_month', name: 'Events', count: 3},
    {icon: 'article', name: 'Pages', count: 39},
    {icon: 'newspaper', name: 'Newsletter', count: 4},
    {icon: 'tag', name: 'Hashtags', count: 3}
  ]

}
