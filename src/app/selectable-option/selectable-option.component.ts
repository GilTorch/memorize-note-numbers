import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';import { Degree, Key } from '../key.model';;
;

@Component({
  selector: 'app-selectable-option',
  imports: [NgClass],
  templateUrl: './selectable-option.component.html',
  styleUrl: './selectable-option.component.scss',
})
export class SelectableOptionComponent {
  selected = input<boolean>();
  option = input.required<Key | Degree>();
  selectOption = output<string>();
  type=input.required<"Key" | "Degree">()

  onSelectKey(){
    this.selectOption.emit(this.option()); 
  }
}
