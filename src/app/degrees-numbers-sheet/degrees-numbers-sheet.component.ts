import { Component, computed, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { KeysService } from '../keys.service';
@Component({
  selector: 'app-degrees-numbers-sheet',
  imports: [MatIconModule],
  templateUrl: './degrees-numbers-sheet.component.html',
  styleUrl: './degrees-numbers-sheet.component.scss',
})
export class DegreesNumbersSheetComponent {
  keysService = inject(KeysService);
  degreesNumbers = this.keysService.keyDegreesToNumbers
  degreesNumbersList = computed(() => {
    return Object.entries(this.degreesNumbers())
  })
}
