import { Component, OnInit } from '@angular/core';
import { SideBarComponent } from "../../shared/components/side-bar/side-bar.component";
import { CommonModule } from '@angular/common';
import { GalleriaModule } from 'primeng/galleria';
import { CategoryProps, CategorylistComponent } from '../../shared/components/categorylist/categorylist.component';
import { GameModel } from '../../core/models/game.model';
import { MiniGameCardComponent } from '../../shared/components/mini-game-card/mini-game-card.component';
import { BigGameCardComponent } from '../../shared/components/big-game-card/big-game-card.component';
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CommonModule, SideBarComponent, GalleriaModule, CategorylistComponent, MiniGameCardComponent, BigGameCardComponent],
})
export class HomeComponent {
  images: any[] = [
    {
      itemImageSrc: 'assets/images/banner-background.svg',
      thumbnailImageSrc: 'assets/images/banner-background.svg',
      title: 'A NEW WORLD IS BORN',
      description: 'Meet the Community'
    },
  ];

  position: string = 'bottom';

  showIndicatorsOnItem: boolean = false;

  responsiveOptions: any[] = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];

  categories1: CategoryProps[] = [
    {name: 'All Games', selected: true},
    {name: 'Action'},
    {name: 'Sports'},
    {name: 'Mistery'},
    {name: 'Strategic'},
    {name: 'Mission'},
    {name: 'Multiplay'}]

  categories2: CategoryProps[] = [
    {name: 'Most Popular', selected: true},
    {name: 'Most Played'},
    {name: 'Most Downloads'}]

  games: GameModel[] = [
    {
      name: "Name of Game",
      image: "assets/images/games/game_1.svg",
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
      name: "Name of Game",
      image: "assets/images/games/game_2.svg",
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
      name: "Name of Game",
      image: "assets/images/games/game_3.svg",
      creator: "@waltstudios",
      date: "20 Aug 2022",
      category: "Mistery",
      ratings: "4.5",
      download: '10.000.000',
      players: '10.000.000',
      views: '10.000.000',
      country: 'Angola'
    }
  ]
}
