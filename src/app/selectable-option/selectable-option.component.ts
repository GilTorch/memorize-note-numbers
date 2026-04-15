import { NgClass } from '@angular/common';
import { Component, computed, effect, inject, input, output, signal } from '@angular/core';import { Degree, Key } from '../key.model';import { KeysService } from '../keys.service';
;
;

@Component({
  selector: 'app-selectable-option',
  imports: [NgClass],
  templateUrl: './selectable-option.component.html',
  styleUrl: './selectable-option.component.scss',
})
export class SelectableOptionComponent {
  private keysService = inject(KeysService);
  option = input.required<Key | Degree>();
  type=input.required<"Key" | "Degree">()
  
  selected = computed(() => this.type() === "Key" ? this.keysService.selectedKey() === this.option() : this.keysService.selectedDegree() === this.option())


  onSelectOption(){
    if(this.type() === "Degree"){
      this.keysService.selectDegree(this.option() as Degree)
    } else {
      this.keysService.selectKey(this.option() as Key)
    }
  }
}
