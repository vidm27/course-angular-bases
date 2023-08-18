import { NgModule } from "@angular/core";
import { CounterComponent } from "./counter/counter.component";

@NgModule({
  declarations: [
    CounterComponent
    
  ],
  exports: [ // debemos exportar este exponente si queremos usarlo desde el exterior.
    CounterComponent
  ]
})

export class CounterModule{

}
