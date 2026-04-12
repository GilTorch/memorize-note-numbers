import { Component, inject, signal } from '@angular/core';
import { SelectableComponent } from './selectable/selectable.component';
import { DegreesNumbersSheetComponent } from "./degrees-numbers-sheet/degrees-numbers-sheet.component";
import { KeysService } from './keys.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [SelectableComponent, DegreesNumbersSheetComponent]
})
export class App {
  protected readonly title = signal('memorize-note-numbers');
  keysService = inject(KeysService);
  keys = this.keysService.keys;
  degrees = this.keysService.degrees;

  onSelectOption(option: string){
    
  }
}
