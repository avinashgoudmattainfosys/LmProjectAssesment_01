import { Routes } from '@angular/router';
import {MyCounterComponent} from './my-counter/my-counter.component';
import { DemoReactiveFormComponent } from './demo-reactive-form/demo-reactive-form.component';
export const routes: Routes = [
  
  { path: 'reactiveform', component: DemoReactiveFormComponent },
  { path: 'counter', component: MyCounterComponent },
];
