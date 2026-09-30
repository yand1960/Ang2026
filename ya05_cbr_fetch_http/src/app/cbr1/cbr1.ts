import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-cbr1',
  styleUrl: './cbr1.css',
  templateUrl: './cbr1.html',
})
export class Cbr1 {
  // Применение сигналов обеспечивает уведомление 
  // другим участникам процесса (напримрер, шаблону), 
  // что значение изменилось
  usd: WritableSignal<number> = signal<number>(0);
  gbp: WritableSignal<number> = signal<number>(0);
  eur: WritableSignal<number> = signal<number>(0);

  private url = "https://www.cbr-xml-daily.ru/daily_json.js"

  constructor() {
    // В конструкторе невозможно применить async/await.
    // Впрочем, .then применять можно, но это не столько неэстетично,
    // сколько может привести к проблемам в сложных случаях.
    // Считается правильным, получать данные в методе ngOnInit
  }

  // Этот метод вызывается после конструктора и может быть асинхронным
  async ngOnInit() {
    // К сожалению, современный Angular не гарантирует, 
    // что шаблон узнает, что поля обновились в результате асинхронного процесса
    const response = await fetch(this.url);
    const result = await response.json();
    console.log(result);
    this.gbp.set(result["Valute"]["GBP"]["Value"]);
    this.usd.set(result["Valute"]["USD"]["Value"]);
    this.eur.set(result["Valute"]["EUR"]["Value"]);
    console.log(this.gbp, this.usd, this.eur);
  }
}
