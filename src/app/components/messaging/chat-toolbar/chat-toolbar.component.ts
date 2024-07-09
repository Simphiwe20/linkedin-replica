import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-chat-toolbar',
  standalone: true,
  imports: [ MatIconModule ],
  templateUrl: './chat-toolbar.component.html',
  styleUrl: './chat-toolbar.component.scss'
})
export class ChatToolbarComponent {


  icons: any[] = [
    {name: 'more_horiz'},
    {name: 'video_call'},
    {name: 'star'}
  ]

}
