import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";

@Component({
  imports: [ReactiveFormsModule],
  selector: "app-calc4",
  styleUrl: "../calc1/calc1.css",
  templateUrl: "./calc4.html",
})
export class Calc4 {
  x: FormControl<number>;
  y: FormControl<number>;
  result: FormControl<number>;

  constructor() {
    this.x = new FormControl(0, {nonNullable: true});
    this.y = new FormControl(0, {nonNullable: true});
    this.result = new FormControl(0, {nonNullable: true});
  }

  plus() {
    this.result.setValue(this.x.value + this.y.value)
  }

  minus() {
    this.result.setValue(this.x.value - this.y.value)
  }

}
