import { Component } from '@angular/core';
import { ItemComponent, ItemProps } from './item/item.component';
import { CommonModule } from '@angular/common';
import { UserListComponent } from '../user-list/user-list.component';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, ItemComponent, UserListComponent],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})

export class SideBarComponent {
  items: ItemProps[] = [
    {name: "News Feed", icon: "home.svg"},
    {name: "Forums", icon: "messages.svg"},
    {name: "Saveds", icon: "saveds.svg"},
    {name: "Your Stars", icon: "stars.svg"},
    {name: "Scores", icon: "scores.svg"},
    {name: "Developments", icon: "developments.svg"},
    {name: "Matches", icon: "matches.svg"},
    {name: "General Rules", icon: "warning.svg"},
  ];

  items2: ItemProps[] = [
    {name: "Conditions", icon: "conditions.svg"},
    {name: "Settings", icon: "settings.svg"},
  ];
}
