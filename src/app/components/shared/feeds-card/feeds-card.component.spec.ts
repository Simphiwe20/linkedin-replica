import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedsCardComponent } from './feeds-card.component';

describe('FeedsCardComponent', () => {
  let component: FeedsCardComponent;
  let fixture: ComponentFixture<FeedsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
