
import { createAction, props } from '@ngrx/store';
import { Employee, EmployeesResponse } from "../../Models/employee.model";

 export const addEmployee = createAction(
    '[Employee] Add Employee', 
    props<{employee: Employee}>()
);
export const loadEmployeesSuccess = createAction('[Employee] load Employees Success',
props<{employees: Employee[]}>()
);