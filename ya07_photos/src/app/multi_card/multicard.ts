import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Portrait } from '../portrait';


@Component({
  selector: 'app-multi-card',
  imports: [],
  templateUrl: './multicard.html',
  styleUrl: './multicard.css'
})
export class Multicard {
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
