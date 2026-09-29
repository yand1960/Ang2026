import { Component, signal } from '@angular/core';
import {CommonModule} from '@angular/common';
import { Repository, Person } from './services/repository';

@Component({
	imports: [CommonModule],
	// Без "providers: [Repository]" не работает инжекция. 
	// Но можно заменить декоратором у сервиса,
	// или добавлением в providers в app.config.ts.
	// Разница - во времени жизни.
	// providers: [Repository], 
  	selector: 'app-root',
  	styleUrl: './app.css',
 	templateUrl: './app.html',
})
export class App {
	lala: string = "LALA";
	bubu: string = "BUBU";
	time: Date | undefined;
	people : Person[]  ;
	
	// Инжекция через конструктор
	constructor(repository: Repository) {
		this.time = new Date();
		this.people = repository.getPeople()
	}

}
