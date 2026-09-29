import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Page1 } from './page1/page1';

@Component({
  imports: [RouterOutlet, RouterLink, Page1],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ya03_spa');
}
