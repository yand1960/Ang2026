import { Component, signal } from '@angular/core';
import { Portrait } from '../services/portrait';
import { PortraitRepository } from '../services/repository';


@Component({
  selector: 'app-multi-card',
  imports: [],
  templateUrl: './multicard.html',
  styleUrl: './multicard.css'
})
export class Multicard {
  private repository: PortraitRepository;
  portraits = signal<Portrait[]>([]) ;

  constructor(repository: PortraitRepository) {
    this.repository = repository;
  }

  ngOnInit() {
    this.repository
        .getPortraits()
        .subscribe(result => {
          console.log(result);
          this.portraits.set(result);
        });
  }
}
 
