import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-card5',
  standalone: true,
  imports: [ MatCardModule, MatIconModule],
  templateUrl: './card5.component.html',
  styleUrl: './card5.component.scss'
})
export class Card5Component {

}
