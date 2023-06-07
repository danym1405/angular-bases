//agrupador en el cual voy a tener la definicion de mis componetes del modulo

import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";

@NgModule({
  declarations: [
    CounterComponent
  ],
  exports:[
    CounterComponent
  ]
})
export class CounterModule{}
