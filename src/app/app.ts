import { Component, signal } from '@angular/core';
import { SelectableNotesComponent } from './selectable-notes/selectable-notes.component';
import { DegreesNumbersSheetComponent } from "./degrees-numbers-sheet/degrees-numbers-sheet.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [SelectableNotesComponent, DegreesNumbersSheetComponent]
})
export class App {
  protected readonly title = signal('memorize-note-numbers');
}
