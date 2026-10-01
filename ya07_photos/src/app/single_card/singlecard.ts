import { Component, signal } from '@angular/core';
import { Portrait } from '../services/portrait';
import { PortraitRepository } from '../services/repository';


@Component({
  selector: 'app-single-card',
  imports: [],
  templateUrl: './singlecard.html',
  styleUrl: './singlecard.css'
})
export class Singlecard {
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
 

