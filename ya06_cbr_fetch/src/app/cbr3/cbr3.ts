import { HttpClient } from '@angular/common/http';
import { Component, ChangeDetectorRef, } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-cbr3',
  styleUrl: './cbr3.css',
  templateUrl: './cbr3.html',
})
export class Cbr3 {
  usd: number = 0;
  gbp: number = 0;
  eur: number = 0;
  private url = "https://www.cbr-xml-daily.ru/daily_json.js"
  private cdr: ChangeDetectorRef;
  private http: HttpClient;

  constructor(cdr: ChangeDetectorRef, http: HttpClient) {
    // В конструкторе невозможно применить async/await
    this.cdr = cdr;
    this.http = http;
  }

  // Этот метод вызывается после конструктора и может быть асинхронным
  ngOnInit() {
    // К сожалению, современный Angular не гаранитрует, 
    // что шаблон узнает, что поля обновились в результате асинхронного процесса
    this.http
      .get<any>(this.url)
      .subscribe(result => {
        console.log(result);
        this.gbp = result["Valute"]["GBP"]["Value"];
        this.usd = result["Valute"]["USD"]["Value"];
        this.eur = result["Valute"]["EUR"]["Value"];
        console.log(this.gbp, this.usd, this.eur);
        this.cdr.markForCheck(); // вызвать уведомления об изменениях
      })
  }
}

// Сделайте новы проект, который покажет в виде таблицы данные, 
// полученные от сервиса
// https://yand.dyndns.org/api/nocors.aspx?target=http://yand.dyndns.org/api/products.aspx
// На шаблон отдавайте Product[], т.е. класс сущнсоть Product тоже создайте
