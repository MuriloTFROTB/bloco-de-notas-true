import { Component } from '@angular/core';
import { CookieServices } from '../../../shared/services/cookie.service';
import { NoteUpdateService } from '../../../shared/services/note-update.service';

@Component({
  selector: 'app-saved-notes',
  templateUrl: './saved-notes.component.html',
  styleUrl: './saved-notes.component.css',
})
export class SavedNotesComponent {
  constructor(
    private cookieService: CookieServices,
    private noteUpdatedService: NoteUpdateService
  ) {
    this.loadSavedNotes();
    this.noteUpdatedService.noteUpdated$.subscribe(() => {
      this.loadSavedNotes();
    });
  }
  savedNotes: { title: string; text: string }[] = [];

  loadSavedNotes() {
    const cookies = this.cookieService.getAll();
    for (const cookie in cookies) {
      if (Object.prototype.hasOwnProperty.call(cookies, cookie)) {
        const note = JSON.parse(cookies[cookie]);
        this.savedNotes.push({ title: note.title, text: note.text });
      }
    }
  }
}
