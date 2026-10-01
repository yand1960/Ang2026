import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Multicard} from './multi_card/multicard';

@Component({
  imports: [Multicard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ya07_photos');
}
