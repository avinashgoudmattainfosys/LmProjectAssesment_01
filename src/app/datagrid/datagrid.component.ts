import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee, EmployeesResponse } from '../Models/employee.model';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../services/employee.service';
import { loadEmployees } from '../storage/employeeResponse/empoyeeResponse.actions';

@Component({
  selector: 'app-datagrid',
  imports: [CommonModule],
  templateUrl: './datagrid.component.html',
  styleUrl: './datagrid.component.css',
  standalone: true
})
export class DatagridComponent implements OnInit {
  employees$: Observable<EmployeesResponse> | undefined;
  cop: EmployeesResponse | undefined;
 
  constructor(private store: Store<{ employeeResponse: EmployeesResponse }>
  ){

  }
  ngOnInit(): void {
    this.store.dispatch(loadEmployees());
    this.employees$ = this.store.select(state => state.employeeResponse);
  }
}
 