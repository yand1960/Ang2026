import { Component, signal, WritableSignal } from '@angular/core';
import { Cbr1 } from '../cbr1/cbr1';
import { CbrFetchRepository } from '../services/repositoryFetch';

@Component({
  imports: [],
  selector: 'app-cbr2',
  styleUrl: './cbr2.css',
  templateUrl: './cbr2.html',
})
export class Cbr2 {
  // Применение сигалов обеспечивает уведомление 
  // другим участникам процесса (напримрер, шаблону), 
  // что значение изменилось
  usd: WritableSignal<number> = signal<any>(0);
  gbp: WritableSignal<number> = signal<any>(0);
  eur: WritableSignal<number> = signal<any>(0);
  private repository: CbrFetchRepository;

  constructor(repository: CbrFetchRepository) {
    // В конструкторе невозможно применить async/await
    this.repository = repository;
  }

  // Этот метод вызывается после конструктора и может быть асинхронным
  async ngOnInit() {
    // К сожалению, современный Angular не гаранитрует, 
    // что шаблон узнает, что поля обновились в результате асинхронного процесса
    const result = await this.repository.getAllRates();
    this.gbp.set(result["Valute"]["GBP"]["Value"]);
    this.usd.set(result["Valute"]["USD"]["Value"]);
    this.eur.set(result["Valute"]["EUR"]["Value"]);
    console.log(this.gbp, this.usd, this.eur);
  }
}
