import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { Portrait } from '../portrait';


@Component({
  selector: 'app-accordion',
  imports: [],
  templateUrl: './accordion.html',
  styleUrl: './accordion.css'
})
export class Accordion {
  http: HttpClient;
  portraits = signal<Portrait[]>([]) ;
  private url = "photos/gallery.json"

  constructor(http: HttpClient) {
    this.http = http;
  }

  ngOnInit() {
    this.http.get<Portrait[]>(this.url).subscribe(result => { 
      console.log(result);
      this.portraits.set(result);
    });
  }

}
 

// Доделать первое приближение
