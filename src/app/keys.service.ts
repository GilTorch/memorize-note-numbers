import { computed, Injectable, signal } from '@angular/core';
import note_numbers from './note-numbers.json';
import { Degree, Key } from './key.model';

@Injectable({
  providedIn: 'root',
})
export class KeysService {

  readonly keys = signal<Key[]>([]);
  readonly degrees = signal<Degree[]>(["1", "2", "3", "4", "5", "6", "7"]);
  readonly selectedKey = signal<Key | undefined>(undefined);
  readonly selectedDegree = signal<Degree | undefined>(undefined);
  readonly keysToDegrees = signal<Record<Degree, Key> | undefined>(undefined);
  readonly randomDegree = signal<[Degree, Key] | undefined>(undefined);
  readonly score = signal(0);
  readonly disabledDegrees = signal(false);

  step = signal(1);
  keysToDegreesList = computed(() => {
    if(this.keysToDegrees()){
     return  Object.entries(this.keysToDegrees() as Record<Degree, Key>) as unknown as [Degree, Key][]
    }
    return []
  })

  setRandomDegree = () => {
    if(this.keysToDegreesList()){
      const randomIndex = Math.floor(Math.random() * ((this.keysToDegreesList().length - 1) - 0))
     this.randomDegree.set(this.keysToDegreesList()[randomIndex]);
    } else{
      this.randomDegree.set(undefined);
    }

  }


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
      if(degree === this.randomDegree()?.[0]){
        this.updateScore(1)
      }
  }

  setDisabledDegrees(val: boolean){
    this.disabledDegrees.set(val);
  }

  updateScore(value: 1){
    this.score.update(prevValue => prevValue + value);
  }
}
