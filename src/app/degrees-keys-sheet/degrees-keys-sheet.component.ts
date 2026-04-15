import { Component, computed, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { KeysService } from '../keys.service';
import { DegreeKeyComponent } from "../degree-key/degree-key.component";
import { Degree, Key } from '../key.model';
@Component({
  selector: 'app-degrees-keys-sheet',
  imports: [MatIconModule, DegreeKeyComponent],
  templateUrl: './degrees-keys-sheet.component.html',
  styleUrl: './degrees-keys-sheet.component.scss',
})
export class DegreesKeysSheetComponent {
  keysService = inject(KeysService);
  keysToDegrees = this.keysService.keysToDegrees
  
  keysToDegreesList = computed(() => {
    if(this.keysToDegrees()){
     return  Object.entries(this.keysToDegrees() as Record<Degree, Key>) as unknown as [Degree, Key][]
    }
    return undefined
  })

}
