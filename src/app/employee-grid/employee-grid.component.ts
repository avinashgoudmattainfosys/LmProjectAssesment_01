import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Employee, EmployeesResponse } from '../Models/employee.model';
import { Store, select } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../services/employee.service';
import { deleteEmployee, loadEmployees } from '../storage/employeeResponse/empoyeeResponse.actions';
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
  deletedEmployeeResponse$: Observable<any> | undefined;

  constructor(private store: Store<AppState>
    ,private router: Router
  ) {

  }
  ngOnInit(): void {
    this.store.dispatch(loadEmployees());
    // this.employees$ = this.store.pipe(select(employeeListResponse));

 // Select employee list from store
 this.employees$ = this.store.pipe(select(employeeListResponse));

 // Log to track any updates
 this.employees$.subscribe((employees) => {
   console.log('Updated employees in component:', employees);
 });
 
  }
  addEmployee(): void {
    this.router.navigate(['/reactiveform','add']);
  }
  detailsEmployee(employee: Employee): void {
    debugger;
    this.store.dispatch(selectedEmployee({employee: employee}));
    this.router.navigate(['/reactiveform', 'view']);
  }
  editEmployee(employee: Employee): void {
    debugger;
    this.store.dispatch(selectedEmployee({employee: employee}));
    this.router.navigate(['/reactiveform','edit']);
  }
  deleteEmployee(id:number): void {

    this.store.dispatch(deleteEmployee({id}));
  }


}
