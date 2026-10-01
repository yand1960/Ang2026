import { ChangeDetectorRef, Component } from "@angular/core";
import { Broker, Broker2 } from "../services/borker";

@Component({
  imports: [],
  selector: "app-indicator",
  styleUrl: "./indicator.css",
  templateUrl: "./indicator.html",
})
export class Indicator {
  // private broker: Broker;
  private broker: Broker2;
  message: string  = "";
  cdr: ChangeDetectorRef;

  constructor (broker: Broker2, cdr: ChangeDetectorRef) {
    this.broker = broker;
    this.cdr = cdr;
  }

  ngOnInit() {
    // this.broker.subscribe(
    //   (msg: string) => {
    //     console.log(msg);
    //     this.message = msg;
    //     this.cdr.markForCheck();
    //   }
    // )
    this.broker.subject.subscribe(
      (msg: string) => {
        console.log(msg);
        this.message = msg;
        this.cdr.markForCheck();
      }
    )
  }
}
