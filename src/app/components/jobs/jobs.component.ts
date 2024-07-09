import { Component } from '@angular/core';
import { JobCardComponent } from '../shared/job-card/job-card.component';
import { JobOptionsCardComponent } from '../shared/job-options-card/job-options-card.component';
import { JobGuadianceInforComponent } from '../shared/job-guadiance-infor/job-guadiance-infor.component';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [ JobCardComponent, JobOptionsCardComponent, JobGuadianceInforComponent ],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent {

}
