import { ChangeDetectorRef, Component } from '@angular/core';

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

  constructor(cdr: ChangeDetectorRef) {
    // В конструкторе невозможно применить async/await.
    // Впрочем, .then применять можно, но это не столько неэстетично,
    // сколько может привести к проблемам в сложных случаях.
    // Считается правильным, получать данные в методе ngOnInit
    this.cdr = cdr;
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
