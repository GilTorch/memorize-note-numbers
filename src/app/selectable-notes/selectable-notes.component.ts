import { Component, inject, OnInit, signal } from '@angular/core';
import { SelectableNoteComponent } from '../selectable-note/selectable-note.component';
import { KeysService } from '../keys.service';

@Component({
  selector: 'app-selectable-notes',
  imports: [SelectableNoteComponent],
  templateUrl: './selectable-notes.component.html',
  styleUrl: './selectable-notes.component.scss',
  standalone: true
})
export class SelectableNotesComponent {
  
  keysService = inject(KeysService);
  keys = this.keysService.keys
  selected = this.keysService.selectedKey;

}
