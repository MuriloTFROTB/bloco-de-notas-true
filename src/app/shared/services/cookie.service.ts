import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CookieServices {

  constructor(private cokservice: CookieService) {}

  setNote(title: string, text: string): void {
    const nota = { title: title, text: text };
    const jsonString = JSON.stringify(nota);
    this.cokservice.set('nota'+ title, jsonString);
  }

  getAll(): { [name: string]: string } {
    return this.cokservice.getAll();
  }
}
