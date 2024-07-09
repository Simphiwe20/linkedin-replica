import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendAreaComponent } from './send-area.component';

describe('SendAreaComponent', () => {
  let component: SendAreaComponent;
  let fixture: ComponentFixture<SendAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
