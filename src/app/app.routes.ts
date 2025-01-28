import { Routes } from '@angular/router';
import {MyCounterComponent} from './my-counter/my-counter.component';
import { HeroComponent } from './hero/hero.component';
export const routes: Routes = [
    { path: '', component: MyCounterComponent },
  { path: 'hero', component: HeroComponent }
];
