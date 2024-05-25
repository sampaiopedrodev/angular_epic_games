import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigGameCardComponent } from './big-game-card.component';

describe('BigGameCardComponent', () => {
  let component: BigGameCardComponent;
  let fixture: ComponentFixture<BigGameCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BigGameCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BigGameCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
