import { ChangeDetectorRef, Component } from '@angular/core';
import { Broker, Broker2 } from '../services/borker';

@Component({
  imports: [],
  selector: 'app-cbr',
  styleUrl: './cbr.css',
  templateUrl: './cbr.html',
})
export class Cbr {
  usd: number = 0;
  gbp: number = 0;
  eur: number = 0;
  private url = "https://www.cbr-xml-daily.ru/daily_json.js"
  private cdr: ChangeDetectorRef;
  //private broker: Broker;
  private broker: Broker2;

  // constructor(cdr: ChangeDetectorRef, broker: Broker) {
  //   // В конструкторе невозможно применить async/await.
  //   // Впрочем, .then применять можно, но это не столько неэстетично,
  //   // сколько может привести к проблемам в сложных случаях.
  //   // Считается правильным, получать данные в методе ngOnInit
  //   this.cdr = cdr;
  //   this.broker = broker;
  // }

  constructor(cdr: ChangeDetectorRef, broker: Broker2) {
    // В конструкторе невозможно применить async/await.
    // Впрочем, .then применять можно, но это не столько неэстетично,
    // сколько может привести к проблемам в сложных случаях.
    // Считается правильным, получать данные в методе ngOnInit
    this.cdr = cdr;
    this.broker = broker;
  }

  sendMessage() {
    //this.broker.next("Курс евро: " + this.eur.toString())
    this.broker.subject.next("Курс евро: " + this.eur.toString())
  }

  // Этот метод вызывается после конструктора и может быть асинхронным
  async ngOnInit() {
    // К сожалению, современный Angular не гарантирует, 
    // что шаблон узнает, что поля обновились в результате асинхронного процесса
    const response = await fetch(this.url);
    const result = await response.json();
    console.log(result);
    this.gbp = result["Valute"]["GBP"]["Value"];
    this.usd = result["Valute"]["USD"]["Value"];
    this.eur = result["Valute"]["EUR"]["Value"];
    console.log(this.gbp, this.usd, this.eur);
    this.cdr.markForCheck(); // вызвать уведомления об изменениях
  }

}
