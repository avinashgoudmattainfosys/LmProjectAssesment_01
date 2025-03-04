import { Routes } from '@angular/router';
import {MyCounterComponent} from './my-counter/my-counter.component';
import { ConceptTutorialComponent } from './concept-tutorial/concept-tutorial.component';
import { EmployeeGridComponent } from './employee-grid/employee-grid.component';
export const routes: Routes = [
  { path: '', component: ConceptTutorialComponent },
  { path: 'counter', component: MyCounterComponent },
  { path: 'concepts', component: ConceptTutorialComponent },
  { path: 'employeeinfo', component: EmployeeGridComponent }
];
