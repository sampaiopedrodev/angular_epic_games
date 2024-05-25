import { Component, OnInit } from '@angular/core';
import { GameModel } from '../../../core/models/game.model';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-big-game-card',
  standalone: true,
  imports: [CarouselModule, ButtonModule, TagModule],
  templateUrl: './big-game-card.component.html',
  styleUrl: './big-game-card.component.css'
})
export class BigGameCardComponent implements OnInit{
  games: GameModel[] = [
    {
      name: "Game Strong",
      image: "assets/images/games/game_4.svg",
      creator: "@waltstudios",
      date: "20 Aug 2022",
      category: "Mistery",
      ratings: "4.5",
      download: '10.000.000',
      players: '10.000.000',
      views: '10.000.000',
      country: 'Angola'
    },
    {
      name: "Game Strong",
      image: "assets/images/games/game_5.svg",
      creator: "@waltstudios",
      date: "20 Aug 2022",
      category: "Mistery",
      ratings: "4.5",
      download: '10.000.000',
      players: '10.000.000',
      views: '10.000.000',
      country: 'Angola'
    },
    {
      name: "Game Strong",
      image: "assets/images/games/game_6.svg",
      creator: "@waltstudios",
      date: "20 Aug 2022",
      category: "Mistery",
      ratings: "4.5",
      download: '10.000.000',
      players: '10.000.000',
      views: '10.000.000',
      country: 'Angola'
    }
  ];

  responsiveOptions: any[] | undefined;


    ngOnInit() {
       this.responsiveOptions = [
            {
                breakpoint: '1199px',
                numVisible: 1,
                numScroll: 1
            },
            {
                breakpoint: '991px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }

    getSeverity(status: string) {
        switch (status) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warning';
            case 'OUTOFSTOCK':
                return 'danger';
            default:
              return 'success';
        }
    }
}
