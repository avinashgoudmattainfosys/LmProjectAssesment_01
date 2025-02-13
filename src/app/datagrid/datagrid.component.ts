import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee, EmployeesResponse } from '../Models/employee.model';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../services/employee.service';
import { loadEmployees } from '../storage/employee/empoyeeResponse.actions';

@Component({
  selector: 'app-datagrid',
  imports: [CommonModule],
  templateUrl: './datagrid.component.html',
  styleUrl: './datagrid.component.css'
})
export class DatagridComponent implements OnInit {
  employees$: Observable<EmployeesResponse> | undefined;
  cop: EmployeesResponse | undefined;
 
  constructor(private store: Store<{employees: Employee[]}>
    ,private employeeService: EmployeeService
    ,private store2: Store<{ employeeResponse: EmployeesResponse }>
  ){

  }
  ngOnInit(): void {
    this.store2.dispatch(loadEmployees());
    this.employees$ = this.store2.select(state => state.employeeResponse);
  }
  // ngOnInit() {
  //   // this.employees$ = this.store.select('employees');
  //   this.store.dispatch(loadEmployees());
  //   this.store.dispatch({ type: '[Employee Grid] Load Employees' });
  //   // this.employees$  = this.employeeService.getAllEmployees();
  //   this.employees$ = this.store2.select(state => state.employeeResponse);
  // }
 
}
 