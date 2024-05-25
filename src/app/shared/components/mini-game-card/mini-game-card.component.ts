import { Component, Input } from '@angular/core';
import { GameModel } from '../../../core/models/game.model';

@Component({
  selector: 'app-mini-game-card',
  standalone: true,
  imports: [],
  templateUrl: './mini-game-card.component.html',
  styleUrl: './mini-game-card.component.css'
})
export class MiniGameCardComponent {
  @Input() game!: GameModel;
}
