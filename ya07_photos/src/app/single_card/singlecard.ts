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
    private portraits: Portrait[]= [];
    private currentID = 0;
    portrait = signal<Portrait>(this.portraits[0])
  
    constructor(repository: PortraitRepository) {
      this.repository = repository;
    }

    back() {
      this.currentID -= 1;
      this.portrait.set(this.portraits[this.currentID + 1]);
    }

    forward() {
      this.currentID += 1;
      this.portrait.set(this.portraits[this.currentID + 1]);
    }
  
    ngOnInit() {
      this.repository
          .getPortraits()
          .subscribe(result => {
            console.log(result);
            this.portraits = result;
            this.portrait.set(this.portraits[this.currentID]);
          });
    }
}
 

