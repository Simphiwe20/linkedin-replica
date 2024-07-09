import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-send-area',
  standalone: true,
  imports: [MatInputModule, MatIconModule],
  templateUrl: './send-area.component.html',
  styleUrl: './send-area.component.scss'
})
export class SendAreaComponent {


  icons: any[] = [
    {name: 'image'},
    {name: 'attach_file'},
    {name: 'gif'},
    {name: 'sentiment_satisfied'},
  ]
}
