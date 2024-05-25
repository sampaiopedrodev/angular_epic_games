import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface CategoryProps {
  id?: number;
  name: string;
  selected?: boolean | false;
}


@Component({
  selector: 'app-categorylist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categorylist.component.html',
  styleUrl: './categorylist.component.css'
})
export class CategorylistComponent {
  @Input() category!: CategoryProps;
}
