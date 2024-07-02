import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';



@Component({
  selector: 'app-card4',
  standalone: true,
  imports: [ MatCardModule, MatIconModule ],
  templateUrl: './card4.component.html',
  styleUrl: './card4.component.scss'
})
export class Card4Component {

}
