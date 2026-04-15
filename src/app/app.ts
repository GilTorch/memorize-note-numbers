import { Component, inject, effect, signal, DestroyRef } from '@angular/core';
import { SelectableComponent } from './selectable/selectable.component';
import { DegreesKeysSheetComponent } from "./degrees-keys-sheet/degrees-keys-sheet.component";
import { KeysService } from './keys.service';
import {  Key } from './key.model';
import { QAndAComponent } from "./q-and-a/q-and-a.component";
import { MatIconModule } from '@angular/material/icon';
import { ScoreScreenComponent } from "./score-screen/score-screen.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [SelectableComponent, DegreesKeysSheetComponent, ScoreScreenComponent, QAndAComponent, MatIconModule, ScoreScreenComponent]
})
export class App {
  protected readonly title = signal('memorize-note-numbers');
  keysService = inject(KeysService);
  keys = this.keysService.keys;
  step = this.keysService.step;
  interval: number | undefined;
  timeout: number | undefined;
  intervalCount = signal(5);
  
  destroyRef = inject(DestroyRef);

  constructor() {

    effect(() => {
          if(this.intervalCount() === 0){
          this.keysService.step.set(3);
          if(this.interval){
            clearInterval(this.interval);
          }

          if(this.timeout){
            clearTimeout(this.timeout);
          }
        }
    })

    effect(() => {
      if(this.step() === 2){

        this.interval = setInterval(() => {
            this.intervalCount.update(val => val - 1);
          },1000)

        this.timeout = setTimeout(() => {
            clearInterval(this.interval);
          },60000)
      }
    })

    this.destroyRef.onDestroy(() => {
      if(this.interval){
        clearInterval(this.interval);
      }

      if(this.timeout){
        clearTimeout(this.timeout);
      }
    })
  }

}
