import { Component } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component';
import { MessagesCardComponent } from '../shared/messages-card/messages-card.component';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [ FooterComponent, MessagesCardComponent ],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})
export class MessagesComponent {

}
