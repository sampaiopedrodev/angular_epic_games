import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface UserProps {
  id: number,
  avatar: string,
  name: string,
  online?: boolean | true
}

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  avatarDirectory: string = "assets/images";
  
  users: UserProps[] = [
    {id: 1, name: "Dylan", avatar: "Jonas_2.svg"},
    {id: 2, name: "Estrela", avatar: "Jonas_3.svg"},
    {id: 4, name: "Micheli", avatar: "Jonas.svg"},
    {id: 2, name: "Naldo", avatar: "Jonas_3.svg"},
  ];
}
