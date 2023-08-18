# Que buscamos al construir los componentes?
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
