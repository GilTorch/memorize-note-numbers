import { Injectable, signal } from '@angular/core';
import note_numbers from './note-numbers.json';
import { Degree, Key } from './key.model';

@Injectable({
  providedIn: 'root',
})
export class KeysService {

  readonly keys = signal<Key[]>([]);
  readonly selectedKey = signal<Key | "">("");
  readonly keyDegreesToNumbers = signal<Record<Degree, Key> | {}>({});

  constructor(){
    this.keys.set(Object.keys(note_numbers) as Key[]);
  }

  selectKey(key: Key){
    this.keyDegreesToNumbers.set(note_numbers[key] as Record<Degree, Key>);
    this.selectedKey.set(key);
  }

}
