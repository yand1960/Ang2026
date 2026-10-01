import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { Portrait } from '../portrait';


@Component({
  selector: 'app-single-card',
  imports: [],
  templateUrl: './singlecard.html',
  styleUrl: './singlecard.css'
})
export class Singlecard {
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
