import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { Reactions } from '../../../interfaces/reactions';
import { CommonModule } from '@angular/common';
import {MatMenuModule, MatMenuTrigger} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-feeds-card',
  standalone: true,
  imports: [MatCardModule, MatIconModule, CommonModule, MatMenuModule, MatButtonModule, MatMenuTrigger],
  templateUrl: './feeds-card.component.html',
  styleUrl: './feeds-card.component.scss'
})
export class FeedsCardComponent implements AfterViewInit {

  @ViewChild("reactionTrigger")
  trigger!: MatMenuTrigger;

  reactions: Reactions[] = [
    {reaction: 'celebrate', count: 1, url: 'celebrate.png'},
    {reaction: 'support', count: 1, url: 'support.png'},
    {reaction: 'curious', count: 1, url: 'curious.png'}
  ]

  postActions: any[] = [
    // {name: 'Like', image: "like1.png"},
    {name: 'Comment', image: "comment.png"},
    {name: 'Repost', image: "repost.png"},
    {name: 'Send', image: "send.png"}
  ]

  reactions1: Reactions[] = [
    {reaction: 'celebrate', count: 1, url: 'celebrate.png'},
    {reaction: 'support', count: 1, url: 'support.png'},
    {reaction: 'curious', count: 1, url: 'curious.png'},
    {reaction: 'like', count: 1, url: 'like.png'},
    {reaction: 'funny', count: 1, url: 'funny.png'},
    {reaction: 'insightful', count: 1, url: 'insightful.png'},
    {reaction: 'heart', count: 1, url: 'heart.png'}
  ]

  isMenuOpened: boolean = false

  ngAfterViewInit(): void {
    console.log(this.trigger)
    let ele = document.getElementById('trigger')
    console.log(ele)
  }

  openMenu(): void {
    this.trigger.openMenu()
  }

  closeMenu(): void {
    this.trigger.closeMenu()
  }

}
