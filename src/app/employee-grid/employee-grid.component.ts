import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee, EmployeesResponse } from '../Models/employee.model';
import { Store, select } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../services/employee.service';
import { loadEmployees } from '../storage/employeeResponse/empoyeeResponse.actions';
import { AppState, employeeListResponse } from '../storage/app.state';
import { selectedEmployee } from '../storage/employee/employee.actions';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-employee-grid',
  imports: [CommonModule],
  templateUrl: './employee-grid.component.html',
  styleUrl: './employee-grid.component.css',
  standalone: true
})
export class EmployeeGridComponent implements OnInit {
  employees$: Observable<EmployeesResponse> | undefined;

  constructor(private store: Store<AppState>
    ,private router: Router
  ) {

  }
  ngOnInit(): void {
    this.store.dispatch(loadEmployees());
    this.employees$ = this.store.pipe(select(employeeListResponse));
  }
  addEmployee(): void {

  }
  detailsEmployee(): void {

  }
  editEmployee(employee: Employee): void {
    debugger;
    this.store.dispatch(selectedEmployee({employee: employee}));
    this.router.navigate(['/reactiveform']);
  }
  deleteEmployee(): void {

  }


}
