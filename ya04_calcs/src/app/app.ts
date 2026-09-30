import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Calc1 } from './calc1/calc1';
import { Calc2 } from './calc2/calc2';
import { Calc3 } from './calc3/calc3';
import { Calc4 } from './calc4/calc4';

@Component({
  imports: [RouterOutlet, Calc1, Calc2, Calc3, Calc4],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('dp04_calcs');
}
