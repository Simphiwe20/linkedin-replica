import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { MsgOption } from '../../../interfaces/msg-option';
import {MatSelectModule} from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { PersonComponent } from '../../messaging/person/person.component';
import { ChatToolbarComponent } from '../../messaging/chat-toolbar/chat-toolbar.component';
import { SendAreaComponent } from '../../messaging/send-area/send-area.component';
import { ChatsComponent } from '../../messaging/chats/chats.component';

@Component({
  selector: 'app-messages-card',
  standalone: true,
  imports: [ MatIconModule, PersonComponent, MatCardModule, MatInputModule, MatSelectModule, CommonModule, FormsModule, ChatToolbarComponent, SendAreaComponent, ChatsComponent],
  templateUrl: './messages-card.component.html',
  styleUrl: './messages-card.component.scss'
})
export class MessagesCardComponent {

  msgOptions: MsgOption[] = [
    {name: 'Unread', func: () => console.log('unread'), state: false },
    {name: 'My Connections', func: () => console.log('My Connections'), state: false },
    {name: 'inMail', func: () => console.log('inMail'), state: false },
    {name: 'Starred', func: () => console.log('Starred'), state: false },
  ]

  msgTypes: any[] = [
    {name: 'Focused', value: 'focused'},
    {name: 'Other', value: 'name'},
    {name: 'Archived', value: 'archived'},
    {name: 'Spam', value: 'spam'}
  ]

  selectedOpt: string = 'Focused'
}
