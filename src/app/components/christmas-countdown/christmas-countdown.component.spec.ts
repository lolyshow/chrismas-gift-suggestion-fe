import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChristmasCountdownComponent } from './christmas-countdown.component';

describe('ChristmasCountdownComponent', () => {
  let component: ChristmasCountdownComponent;
  let fixture: ComponentFixture<ChristmasCountdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChristmasCountdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChristmasCountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
