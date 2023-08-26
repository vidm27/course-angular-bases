# Seccion 4
Que buscamos al construir los componentes?

Buscamos que nuestros componentes sean chicos.


Dentro de las combenciones de angular debemos escribir el nombre de la feature y el tipo de paquete.

- cuando creamos los componentes lo debemos definir en algun lugar

video 41
Creamos los directorios en base a modulos y que tengamos una estrecha relacion de componentes.

Comando para crear un componente
```
❯ ng g component heroes/hero
```

video 43
Se debe priorizar el one way data biding o de una sola via, tratando de evitar two way data biding.

Nuestra clases de typescript tiene el control absoluto de nuestra informacion.


video 45 - 47
Cuando se trata de realizar modificaciones con javascript directamente, angular no lo ve en su ciclo de eventos.

la directiva *ngif para realizar evaluaciones y evaluar que cosas podemos mostrar y que no.

*nfor: las directiva sirve para iterar sobre array de elementos.
ng-template: 

video 48
Un modulo agrupa funcionalidades. Nuestro modulos son visibles son dentro del modulo como tal que lo envuelve, ya que su objetivo es que esten protegidos del mundo exterior.

video 49
El common modulo es donde se encuentra alojado las directivas de *ngfor, *ngif

# Seccion 5

En readme debemos poner los pasos especiales que se ocupan para la aplicacion.

- Crear modulos con angular NG-CLI: `ng g m nombre_modulo`

Imporatcion de modulos: Angular pueder importa un modulo 
en varios lugares, pero angular es inteligente y los mantinene en cache o memoria y reautiliza el modulo desde su primera importacion.

- pages: son componentes que tienen mas componentes dentro y son utilzadas mediante el router de angular. 

- app: la palabra app-nombre se usa cuando no utlizamos componentes personalizados, cuando ya tienes componentes perzonalizados, no utlizas app sino el del componente.

Interfaces: cuando yo trabajo con las interfaces me sirven para la parte de desarrollo, pero cuando hago el build de la aplicacion pasa a ser 0 codigo de javascript. 

**Propiedad Input**
```
@Input()
public characterList: Character[] = [{
    name: 'Trunks',
    power: 10000
}]
```

Para decirle a un componente hijo que va recibir valores desde el padre, debes agregar el decorador **@Input()** el cual le puede especificar el nombre de la propiedad y si no, toma el nombre de la propiedad donde se utiliza. 

Curiosidades de Angular: cualquier propiedad html que se coloque en llaves [] le decimos a angular que la controle.

Two-way-data-binding: permite conectar la parte de html con typescript. Si hace un cambio en uno se refleja en otro.

- ngModel: Es un directiva que nos permite hacer un binding con los *input*, *select*, *textarea* el cual nos permite tener un control del estado de formulario. Esto requiere la importacion del modulo FormModule.

### Emision de eventos al padre

Cuando queremos realizar una emision de eventos desde el hijo hasta el padre, angular se apoya en RXJS para terner programacion reactiva. Entonces, para crear un evento desde el hijo `@Output() public onNewCharacter: EventEmitter<Character> = new EventEmitter();` donde especificamos que es lo que va fluir por la emision.

Para escuchar el evento en nuestro elemento padre, Angular tiene una variables `$event` donde este es una variable especializada y sabe que tipo de evento es y que es lo que se envia.


### Servicios
Los servicios se encargan de proveernos de la data a nuestros componentes. Esto nos permite tener centralizado las reglas y logica de negocio.
**Javascript: todos los objetos se pasan por referencia.**
```angular
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ServiceNameService {
  constructor() { }

}
```

Los servicios tampoco deben ser publicos, deben mantenerse privados
