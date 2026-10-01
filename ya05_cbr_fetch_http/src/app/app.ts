import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cbr } from './cbr/cbr';
import { Cbr1 } from './cbr1/cbr1';
import { Cbr2 } from './cbr2/cbr2';
import { Cbr3 } from './cbr3/cbr3';
import { Indicator } from './indicator/indicator';

@Component({
  imports: [Cbr, Cbr1, Cbr2, Cbr3, Indicator],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ya06_cbr_fetch');
}
