import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotSettingCardComponent } from './not-setting-card.component';

describe('NotSettingCardComponent', () => {
  let component: NotSettingCardComponent;
  let fixture: ComponentFixture<NotSettingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotSettingCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotSettingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
