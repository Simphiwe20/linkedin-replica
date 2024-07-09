import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-job-guadiance-infor',
  standalone: true,
  imports: [ MatIconModule, MatCardModule],
  templateUrl: './job-guadiance-infor.component.html',
  styleUrl: './job-guadiance-infor.component.scss'
})
export class JobGuadianceInforComponent {

}
