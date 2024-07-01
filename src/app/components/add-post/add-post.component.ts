import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { NameIcon } from '../../interfaces/name-icon';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [ MatCardModule, MatInputModule, MatIconModule, CommonModule ],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.scss'
})
export class AddPostComponent {

  items: NameIcon[] = [
    { name: 'Media', icon: 'photo', func: () => {console.log('working')}, popUpName: 'sim', color: 'color-b'},
    { name: 'Event', icon: 'calendar_month', func: () => {console.log('working')}, popUpName: 'sim', color: 'color-brown '},
    { name: 'Write article', icon: 'newspaper', func: () => {console.log('working')}, popUpName: 'sim', color: 'color-purple'}
  ]
 }
