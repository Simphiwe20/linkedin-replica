import { Component, OnInit } from '@angular/core';
import { ToolbarComponent } from '../shared/toolbar/toolbar.component';
import { Router, RouterModule } from '@angular/router'


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [ ToolbarComponent, RouterModule ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.navigate(['/landing/home'])
  }
}
