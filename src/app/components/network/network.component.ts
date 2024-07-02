import { Component } from '@angular/core';
import { Card3Component } from '../shared/card3/card3.component';
import {MatIconModule} from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { Card4Component } from '../shared/card4/card4.component';



@Component({
  selector: 'app-network',
  standalone: true,
  imports: [ Card3Component, Card4Component, MatCardModule, MatIconModule],
  templateUrl: './network.component.html',
  styleUrl: './network.component.scss'
})
export class NetworkComponent {

}
