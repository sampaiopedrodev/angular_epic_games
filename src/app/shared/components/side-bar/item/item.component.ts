import { Component, Input } from '@angular/core';

export interface ItemProps {
  name: string,
  icon: string,
  route?: string
}

@Component({
  selector: 'sidebar-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})

export class ItemComponent {
  @Input() data!: ItemProps;

  iconDirectory: string = "assets/images/sidebar-icons";
}
