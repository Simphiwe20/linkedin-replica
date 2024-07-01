import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-card1',
  standalone: true,
  imports: [ MatCardModule, MatIconModule ],
  templateUrl: './card1.component.html',
  styleUrl: './card1.component.scss'
})
export class Card1Component {

 
  items: any[] = [
    {name: 'Profile viewers', count: 10},
    {name: 'Posts impression', count: 10}
  ]
}
