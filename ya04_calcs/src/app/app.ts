import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Calc1 } from './calc1/calc1';
import { Calc2 } from './calc2/calc2';

@Component({
  imports: [RouterOutlet, Calc1, Calc2],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('dp04_calcs');
}
