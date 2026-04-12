import { Component, signal } from '@angular/core';
import { SelectableNotesComponent } from './selectable-notes/selectable-notes.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [SelectableNotesComponent]
})
export class App {
  protected readonly title = signal('memorize-note-numbers');
}
