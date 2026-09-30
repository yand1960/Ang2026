import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";

@Component({
  imports: [ReactiveFormsModule],
  selector: "app-calc4",
  styleUrl: "../calc1/calc1.css",
  templateUrl: "./calc4.html",
})
export class Calc4 {
  x: FormControl;
  y: FormControl;
  result: FormControl;

  constructor() {
    this.x = new FormControl<number>(0);
    this.y = new FormControl<number>(0);
    this.result = new FormControl<number>(0);
  }

  plus() {
    this.result.setValue(Number(this.x.value) + Number(this.y.value))
  }

  minus() {
    this.result.setValue(this.x.value - this.y.value)
  }

}
