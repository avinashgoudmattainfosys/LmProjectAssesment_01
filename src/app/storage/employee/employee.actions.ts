
import { createAction, props } from '@ngrx/store';
import { Employee } from "../../services/employee.model";

 export const addEmployee = createAction(
    '[Employee] Add Employee', 
    props<{employee: Employee}>()
);
export const loadEmployees = createAction('[Employee] Load Employees');
export const loadEmployeesSuccess = createAction('[Employee] load Employees Success',
props<{employees: Employee[]}>()
);