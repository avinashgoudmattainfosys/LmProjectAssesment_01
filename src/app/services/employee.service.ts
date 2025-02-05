import { Injectable } from '@angular/core';
import { Employee} from './employee.model';
import { Store } from '@ngrx/store';
import { addEmployee } from '../storage/employee/employee.actions';
// import { EmployeeListState } from '../storage/employee/employee.reducer';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private store: Store) { }

  saveEmployee(employee: Employee){
    this.updateStorage(employee);
  }
  updateStorage(employee: Employee) {
    this.store.dispatch(addEmployee({employee}));
    // TODO: Dispatch an increment action
  }
}
