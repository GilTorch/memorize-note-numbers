import { Injectable, signal } from '@angular/core';
import note_numbers from './note-numbers.json';
import { Degree, Key } from './key.model';

@Injectable({
  providedIn: 'root',
})
export class KeysService {

  readonly keys = signal<Key[]>([]);
  readonly degrees = signal<Degree[]>(["1", "2", "3", "4", "5", "6", "7"]);
  readonly selectedKey = signal<Key | undefined>(undefined);
  readonly selectedDegree = signal<Degree | "">("");
  readonly keysToDegrees = signal<Record<Degree, Key> | undefined>(undefined);
  step = signal(1);

  constructor(){
    this.keys.set(Object.keys(note_numbers) as Key[]);
  }

  selectKey(key: Key){
    this.keysToDegrees.set(note_numbers[key] as Record<Degree, Key>);
    this.selectedKey.set(key);
    this.step.set(2);
  }

  selectDegree(degree: Degree){
    this.selectedDegree.set(degree);
  }

}
