import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-calc2',
  styleUrl: '../calc1/calc1.css',
  templateUrl: './calc2.html',
})
export class Calc2 {

  x: String = "0";
  y: String = "0";
  result: Number = 0;

  plus() {
    this.result = Number(this.x) + Number(this.y);
  }

  minus() {
    this.result = Number(this.x) - Number(this.y);
  }

}

// 1. Подумайте, нельзя ли опреацию связать в стиле "банан в коробке"
// 2. Сделайте SPA из этого приложения
