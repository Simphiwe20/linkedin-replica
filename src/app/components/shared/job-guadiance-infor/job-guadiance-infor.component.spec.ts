import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobGuadianceInforComponent } from './job-guadiance-infor.component';

describe('JobGuadianceInforComponent', () => {
  let component: JobGuadianceInforComponent;
  let fixture: ComponentFixture<JobGuadianceInforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobGuadianceInforComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobGuadianceInforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
