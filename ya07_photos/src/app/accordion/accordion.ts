import { Component, signal } from '@angular/core';
import { Portrait } from '../services/portrait';
import { PortraitRepository } from '../services/repository';
import { MatExpansionModule } from '@angular/material/expansion';


@Component({
  selector: 'app-accordion',
  imports: [MatExpansionModule],
  templateUrl: './accordion.html',
  styleUrl: './accordion.css'
})
export class Accordion {
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
 

