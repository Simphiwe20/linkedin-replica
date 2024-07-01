import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeToolbarComponent } from './welcome-toolbar.component';

describe('WelcomeToolbarComponent', () => {
  let component: WelcomeToolbarComponent;
  let fixture: ComponentFixture<WelcomeToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomeToolbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
