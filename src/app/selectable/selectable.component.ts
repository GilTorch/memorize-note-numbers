import { Component, inject, input, output } from '@angular/core';
import { SelectableOptionComponent } from '../selectable-option/selectable-option.component';
import { KeysService } from '../keys.service';
import { Degree, Key } from '../key.model';

@Component({
  selector: 'app-selectable',
  imports: [SelectableOptionComponent],
  templateUrl: './selectable.component.html',
  styleUrl: './selectable.component.scss',
  standalone: true
})
export class SelectableComponent {

  keysService = inject(KeysService);
  options = input.required<(Key | Degree)[]>();
  selected = input<Key | Degree>();
  selectOption = output<string>();
  type=input.required<"Key" | "Degree">();

  onSelectOption(option: string){
    this.selectOption.emit(option);
  }
}
