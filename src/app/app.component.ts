import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { HomeComponent } from "./modules/home/home.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        RouterOutlet,
        HeaderComponent,
        SideBarComponent,
        HomeComponent,
    ],
})

export class AppComponent {
  title = 'angular_epic_games';
}
