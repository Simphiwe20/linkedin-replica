import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOptionsCardComponent } from './job-options-card.component';

describe('JobOptionsCardComponent', () => {
  let component: JobOptionsCardComponent;
  let fixture: ComponentFixture<JobOptionsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobOptionsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobOptionsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
