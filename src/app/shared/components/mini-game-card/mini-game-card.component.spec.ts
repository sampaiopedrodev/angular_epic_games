import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniGameCardComponent } from './mini-game-card.component';

describe('MiniGameCardComponent', () => {
  let component: MiniGameCardComponent;
  let fixture: ComponentFixture<MiniGameCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiniGameCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiniGameCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
