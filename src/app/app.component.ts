import { Component } from '@angular/core';

@Component({ // transforma mi clase para que sea un componente.
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Mi primera app de Angular, no se ve dificil'; // son propiedad de Angular
  public counter: number = 10;
  increaseBy(value: number): void {
    this.counter += value;
  }

  resetCount(): void {
    this.counter = 10;
  }
}
