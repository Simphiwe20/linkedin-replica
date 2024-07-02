import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FollowCardComponent } from '../follow-card/follow-card.component';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-card2',
  standalone: true,
  imports: [ MatCardModule, MatIconModule, FollowCardComponent ],
  templateUrl: './card2.component.html',
  styleUrl: './card2.component.scss'
})
export class Card2Component {

}
