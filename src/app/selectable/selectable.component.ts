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

  options = input.required<(Key | Degree)[]>();
  type=input.required<"Key" | "Degree">();

}
