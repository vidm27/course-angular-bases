import { Component } from "@angular/core";

// es un decorador que transforma mi clase
@Component({
  selector: 'app-counter', // es recomendable utilizar prefijos para los nombres de los componentes
  template: `<h1>Hola counter</h1>
  <p>Counter: {{counter}}</p>
<button (click)="increaseBy(1)">+1</button>
<button (click)="resetCount()">Reset</button>
<button (click)="increaseBy(-1)">-1</button>
  `
})

export class CounterComponent {
  public counter: number = 0;

  increaseBy(value: number): void{
    this.counter += value;
  }

  resetCount(): void {
    this.counter = 10;
  }
}
