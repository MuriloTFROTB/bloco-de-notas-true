import { Component, ElementRef, ViewChild } from '@angular/core';
import { CookieServices } from '../../../shared/services/cookie.service';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrl: './createnote.component.css',
})
export class CreatenoteComponent {
  coresFundo: boolean[] = [false, false, false]; // Um booleano para cada item

  press(index: number) {
    this.coresFundo[index] = !this.coresFundo[index];
  }

  title: string = '';
  cookies: { [name: string]: string } = {};
  savedNotes: { title: string; text: string }[] = [];
  showSavedNotes: boolean = false;
  constructor(private cookieService: CookieServices) {

  }
  @ViewChild('myTextarea') myTextareaRef!: ElementRef;

  saveNote() {
    const textareaValue = this.myTextareaRef.nativeElement.value;
    this.cookieService.setNote(this.title, textareaValue);
    this.cookies = this.cookieService.getAll();
    this.savedNotes = [];
    for (const cookie in this.cookies) {
      if (Object.prototype.hasOwnProperty.call(this.cookies, cookie)) {
        const note = JSON.parse(this.cookies[cookie]);
        this.savedNotes.push({ title: note.title, text: note.text });
      }
    }
    this.showSavedNotes = true;
  }
}
