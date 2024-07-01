import { Component } from '@angular/core';
import { Menu } from '../../../interfaces/menu';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-welcome-toolbar',
  standalone: true,
  imports: [ MatIconModule, CommonModule ],
  templateUrl: './welcome-toolbar.component.html',
  styleUrl: './welcome-toolbar.component.scss'
})
export class WelcomeToolbarComponent {

  menuItems: Menu[] = [ {itemName: "Articles", icon: "newspaper", route: "" },
                        {itemName: "People", icon: "group", route: "" }, 
                        {itemName: "Learning", icon: "local_library", route: "" }, 
                        {itemName: "Games", icon: "toys_and_games", route: "" }, 
                        {itemName: "Work", icon: "work", route: "" } , 
                        {itemName: "Get the app", icon: "laptop_mac", route: "" }
                      ]

  
}
