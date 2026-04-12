import { NgClass } from '@angular/common';
import { Component, input, effect, inject } from '@angular/core';import { Key } from '../key.model';
import { KeysService } from '../keys.service';
;

@Component({
  selector: 'app-selectable-note',
  imports: [NgClass],
  templateUrl: './selectable-note.component.html',
  styleUrl: './selectable-note.component.scss',
})
export class SelectableNoteComponent {
  selected = input<boolean>();
  key = input.required<Key>();
  keysService = inject(KeysService);

  onSelectKey(){
    this.keysService.selectKey(this.key())
  }
}
