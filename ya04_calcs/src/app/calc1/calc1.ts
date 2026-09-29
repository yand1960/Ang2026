import { Component } from '@angular/core';

enum CalcOperation {
  nop,
  plus,
  minus
}

@Component({
  imports: [],
  selector: 'app-calc1',
  styleUrl: './calc1.css',
  templateUrl: './calc1.html',
})
export class Calc1 {
  result?: number = undefined;
  operation: CalcOperation = CalcOperation.nop;
  // Передаем шаблону тип данных enum в виде поля
  calcOperation = CalcOperation;

  plus(x: string, y: string) {
    this.operation = CalcOperation.plus;
    this.result = Number(x) + Number(y);
  }

  minus(x: string, y: string) {
    this.operation = CalcOperation.minus;
    this.result = Number(x) - Number(y);
  }
}
