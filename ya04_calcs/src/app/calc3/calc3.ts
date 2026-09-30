import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
  imports: [],
  selector: "app-calc3",
  styleUrl: "../calc1/calc1.css",
  templateUrl: "./calc3.html",
})
export class Calc3 {
  @ViewChild("num1")
  x?: ElementRef<HTMLInputElement>;
  @ViewChild("num2")
  y?: ElementRef<HTMLInputElement>;
  @ViewChild("num3")
  result?: ElementRef<HTMLInputElement>;
  @ViewChild("btnPlus")
  btnPlus?: ElementRef<HTMLButtonElement>;
  @ViewChild("btnMinus")
  btnMinus?: ElementRef<HTMLButtonElement>;

  plus() {
    const x: number = Number(this.x!.nativeElement.value);
    const y: number = Number(this.y!.nativeElement.value);
    const result: number = x + y;
    this.result!.nativeElement.value = result.toString();
    this.btnPlus!.nativeElement.className = "pressed";
    this.btnMinus!.nativeElement.className = "";
  }

  minus() {
    const x: number = Number(this.x!.nativeElement.value);
    const y: number = Number(this.y!.nativeElement.value);
    const result: number = x - y;
    this.result!.nativeElement.value = result.toString();
    this.btnPlus!.nativeElement.className = "";
    this.btnMinus!.nativeElement.className = "pressed";
  }
}
