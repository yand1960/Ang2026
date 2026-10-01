import { Component, signal } from '@angular/core';
import { Multicard} from './multi_card/multicard';
import { Singlecard } from './single_card/singlecard';
import { Accordion } from './accordion/accordion';

@Component({
  imports: [Multicard, Singlecard, Accordion],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ya07_photos');
}
