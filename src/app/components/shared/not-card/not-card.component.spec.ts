import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotCardComponent } from './not-card.component';

describe('NotCardComponent', () => {
  let component: NotCardComponent;
  let fixture: ComponentFixture<NotCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
