import { Component, inject } from '@angular/core';
import { DegreeKeyComponent } from '../degree-key/degree-key.component';
import { SelectableComponent } from '../selectable/selectable.component';
import { KeysService } from '../keys.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-q-and-a',
  imports: [DegreeKeyComponent, SelectableComponent, MatIconModule],
  templateUrl: './q-and-a.component.html',
  styleUrl: './q-and-a.component.scss',
})
export class QAndAComponent {
    keysService = inject(KeysService);
    degrees = this.keysService.degrees;

    onSelectOption(option: string){

    }
}
