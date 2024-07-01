import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon'
import {MatSelectModule} from '@angular/material/select';

import { Items } from '../../../interfaces/items';
import { ItemsComponent } from '../items/items.component';
import { WelcomSignInComponent } from '../welcom-sign-in/welcom-sign-in.component';
import { WelcomeToolbarComponent } from '../welcome-toolbar/welcome-toolbar.component';
import { SliderComponent } from '../slider/slider.component';



@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [WelcomeToolbarComponent, WelcomSignInComponent, ItemsComponent, SliderComponent, MatSelectModule, MatIconModule, CommonModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {

  firstItems: Items[] = [{ name: 'Marketing', routes: '', },
  { name: 'Public Administration', routes: '', },
  { name: 'Healthcare', routes: '', },
  { name: 'Engineering', routes: '', },
  { name: 'IT Services', routes: '', },
  { name: 'Sustainability', routes: '', },
  { name: 'Business Administration', routes: '', },
  { name: 'Telecommunications', routes: '', },
  { name: 'HR Management', routes: '', },
  { name: 'Show all', routes: '', }]

  secondItems: Items[] = [{ name: 'Engineering', routes: '', },
  { name: 'Business Development', routes: '', },
  { name: 'Finance', routes: '', },
  { name: 'Administrative Assistant', routes: '', },
  { name: 'Retail Associate', routes: '', },
  { name: 'Customer Service', routes: '', },
  { name: 'Operations', routes: '', },
  { name: 'Information Technology', routes: '', },
  { name: 'Marketing', routes: '', },
  { name: 'Human Resourced', routes: '', },
  { name: 'Show all', routes: '', }]

  thirdItems: Items[] = [{ name: 'E-Commerce Platforms', routes: '', },
  { name: 'CRM Software', routes: '', },
  { name: 'Human Resources Management Systems', routes: '', },
  { name: 'Recruiting Software', routes: '', },
  { name: 'Sales Intelligence Software', routes: '', },
  { name: 'Project Management Software', routes: '', },
  { name: 'Help Desk Software', routes: '', },
  { name: 'Social Networking Software', routes: '', },
  { name: 'Desktop Publishing Software', routes: '', },
  // { name: 'Human Resourced', routes: '', },
  { name: 'Show all', routes: '', }]

  forthItems: Items[] = [{ name: 'Pinpoint', routes: '', },
    { name: 'Queen', routes: '', },
    { name: 'CrossClimb', routes: '', }
  ]

  topics: any[] = [ {name: 'Career Development', courses: '120'},
    {name: 'Customer servive', courses: '150'},
  ]

  selectedCar: string = ''

  finds: any[] = [
    {name: 'Find a coworker or classmate', routes: ''},
    {name: 'Find a new job', routes: ''},
    {name: 'Find a course ot training', routes: ''}
  ]

  footers: any = [
    {"General": [{name: "Sign Up", routes: ''}, {name: "Help Center", routes: ''}, {name: "About", routes: ''}, {name: "Press", routes: ''}, {name: "Blog", routes: ''}, {name: "Careers", routes: ''}, {name: "Developers", routes: ''}]},
    {"Browse LinkedIn": [{name: "Learning", routes: ''}, {name: "Jobs", routes: ''}, {name: "Games", routes: ''}, {name: "Salary", routes: ''}, {name: "Mobile", routes: ''}, {name: "Services", routes: ''}, {name: "Products", routes: ''}, {name: "Top Companies Hub", routes: ''}]},
    {"Business Solutions": [{name: "Talent", routes: ''}, {name: "Marketing", routes: ''}, {name: "Sales", routes: ''}, {name: "Learning", routes: ''}]},
    {"Directories": [{name: "Members", routes: ''}, {name: "Jobs", routes: ''}, {name: "Companies", routes: ''}, {name: "Featured", routes: ''}, {name: "Learning", routes: ''}, {name: "Posts", routes: ''}, {name: "Articles", routes: ''}, {name: "Schools", routes: ''}, {name: "News", routes: ''}, {name: "News Letters", routes: ''}, {name: "Services", routes: ''}, {name: "Products", routes: ''}, {name: "Advice", routes: ''}, {name: "People", routes: ''}]},

  ]

  lastFooter: Items[] = [{ name: 'About', routes: '', },
    { name: 'Accessibility', routes: '', },
    { name: 'User Agreement', routes: '', },
    { name: 'Privacy Policy', routes: '', },
    { name: 'Cookie Policy', routes: '', },
    { name: 'Copyright Policy', routes: '', },
    { name: 'Brand Policy', routes: '', },
    { name: 'Guest Controls', routes: '', },
    { name: 'Community Guidelines', routes: '', },
    { name: 'Languages', routes: '', },
  ]

  selectedTopic(topic : string): void {
    console.log(topic)
  } 

  getObj(indx: number): string {
    let footer: any[] = []
    this.footers.forEach((_footer: any) => {
      console.log(Object.keys(_footer)) 
      footer.push(Object.keys(_footer)) 
    })
    console.log("Footer items: ", footer[indx])
    return footer[indx]
  }

  getYear(): number {
    return new Date().getFullYear()
  }

}
