import { Component, input } from '@angular/core';
import { Input } from '@angular/core';
import { Items } from '../../../interfaces/items';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [],
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss'
})
export class ItemsComponent {

  @Input() items: Items[] = []
  @Input() number: string = ''

}
