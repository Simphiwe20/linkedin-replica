import { Component } from '@angular/core';
import { Homenu } from '../../../interfaces/homenu';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatIconModule, MatCardModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  items: any[] = [
        [
          { name: 'About', routes: '', icon: '' },
          { name: 'Accessibility', routes: '', icon: '' },
          { name: 'Help Center', routes: '', icon: '' },
        ],
        [
          { name: 'Privacy & Terms ', routes: '', icon: 'arrow_drop_down' },
          { name: 'Ad Choices', routes: '', icon: '' },
          { name: 'Advertising', routes: '', icon: '' }
        ],
        [
          { name: 'Business Center', routes: '', icon: 'arrow_drop_down' },
          { name: 'Get the Linkedin app', routes: '', icon: '' },
          // { name: 'Help Center', routes: '', icon: '' }
        ],
        [
           { name: 'More', routes: '', icon: '' }
        ]
  ]
}
