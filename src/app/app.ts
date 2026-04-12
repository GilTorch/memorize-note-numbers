import { Component, inject, signal } from '@angular/core';
import { SelectableComponent } from './selectable/selectable.component';
import { DegreesKeysSheetComponent } from "./degrees-keys-sheet/degrees-keys-sheet.component";
import { KeysService } from './keys.service';
import { Degree, Key } from './key.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [SelectableComponent, DegreesKeysSheetComponent]
})
export class App {
  protected readonly title = signal('memorize-note-numbers');
  keysService = inject(KeysService);
  keys = this.keysService.keys;
  selectedKey = this.keysService.selectedKey;

  onSelectOption(option: string, type: "Key" | "Degree"){
    if(type === "Key"){
      this.keysService.selectKey(option as Key);
    } else {
      this.keysService.selectDegree(option as Degree);
    }
  }
}
