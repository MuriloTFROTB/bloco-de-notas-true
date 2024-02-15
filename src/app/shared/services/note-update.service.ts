import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoteUpdateService {
  private noteUpatedSource = new Subject<void>();
  noteUpdated$ = this.noteUpatedSource.asObservable();
  notifyNoteUpdated() {
    this.noteUpatedSource.next();
  }
}
