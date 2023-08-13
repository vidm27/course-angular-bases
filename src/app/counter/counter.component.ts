import { Component } from "@angular/core";

// es un decorador que transforma mi clase
@Component({
  selector: 'app-counter', // es recomendable utilizar prefijos para los nombres de los componentes
  template: '<h1>Hola counter</h1>'
})

export class CounterComponent{

}
