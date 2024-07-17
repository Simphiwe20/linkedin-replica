import { Component, OnInit } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { AddPostComponent } from '../add-post/add-post.component';
import { Card1Component } from '../shared/card1/card1.component';
import { Card2Component } from '../shared/card2/card2.component';
import { FeedsCardComponent } from '../shared/feeds-card/feeds-card.component';
import { SharedServiceService } from '../../services/shared-services/shared-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ AddPostComponent, Card1Component, Card2Component, MatMenuModule, MatIconModule, FeedsCardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  loggedInUser: any;
  sortItems: any[] = [
    {name: 'Recent'},
    {name: 'Top'}
  ]

  sortBy: string = 'Recent'

  constructor(private sharedService: SharedServiceService) {}

  ngOnInit(): void {
    this.loggedInUser = this.sharedService.getData('session', 'loggedInUser')
    console.log(this.loggedInUser)
  }

    sort(_sortBy: string): void {
      this.sortBy = _sortBy
    }

}
