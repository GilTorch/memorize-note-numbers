import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Degree, Key } from '../key.model';

@Component({
  selector: 'app-degree-key',
  imports: [MatIconModule],
  templateUrl: './degree-key.component.html',
  styleUrl: './degree-key.component.scss',
})
export class DegreeKeyComponent {
  degree=input.required<Degree>()
  key=input.required<Key>()
}
