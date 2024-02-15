import { Component, ElementRef, ViewChild } from '@angular/core';
import { CookieServices } from '../../../shared/services/cookie.service';
import { NoteUpdateService } from '../../../shared/services/note-update.service';
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
  constructor(
    private cookieService: CookieServices,
    private noteUpdatedService: NoteUpdateService
  ) {}
  @ViewChild('myTextarea') myTextareaRef!: ElementRef;

  saveNote() {
    const textareaValue = this.myTextareaRef.nativeElement.value;
    if (!textareaValue.trim() && !this.title.trim()) {
      window.alert(
        'Por favor, insira um titulo ou texto para que seja adicionado'
      );
      return;
    }
    this.cookieService.setNote(this.title, textareaValue);
    this.noteUpdatedService.notifyNoteUpdated();
    window.alert('nota criada');
  }
}
