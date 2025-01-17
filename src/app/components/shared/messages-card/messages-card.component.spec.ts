import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesCardComponent } from './messages-card.component';

describe('MessagesCardComponent', () => {
  let component: MessagesCardComponent;
  let fixture: ComponentFixture<MessagesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessagesCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessagesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
