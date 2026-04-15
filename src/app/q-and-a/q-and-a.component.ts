import { Component, DestroyRef, effect, inject, signal } from '@angular/core';
import { DegreeKeyComponent } from '../degree-key/degree-key.component';
import { SelectableComponent } from '../selectable/selectable.component';
import { KeysService } from '../keys.service';

@Component({
  selector: 'app-q-and-a',
  imports: [DegreeKeyComponent, SelectableComponent],
  templateUrl: './q-and-a.component.html',
  styleUrl: './q-and-a.component.scss',
})
export class QAndAComponent {
    keysService = inject(KeysService);
    degrees = this.keysService.degrees;
    randomDegree = this.keysService.randomDegree;
    count = signal(5);
    destroyRef = inject(DestroyRef);

    constructor(){

      this.keysService.setRandomDegree();
      const countIntervalFn = () => setInterval(() => {
        this.count.update(val => val - 1);
      },1000)

     let interval = countIntervalFn();

      effect(() => {
        if(this.count() === 0){
          this.keysService.setRandomDegree();
          this.count.set(5);
          clearInterval(interval)
          interval = countIntervalFn();
        }
      })
      this.destroyRef.onDestroy(() => {
        clearInterval(interval);
      })
    }



    onSelectOption(option: string){

    }
}
