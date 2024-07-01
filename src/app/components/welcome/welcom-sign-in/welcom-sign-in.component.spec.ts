import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomSignInComponent } from './welcom-sign-in.component';

describe('SignInComponent', () => {
  let component: WelcomSignInComponent;
  let fixture: ComponentFixture<WelcomSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomSignInComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
