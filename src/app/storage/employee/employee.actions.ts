
import { createAction, props } from '@ngrx/store';
import { Employee, EmployeesResponse } from "../../Models/employee.model";

 
export const selectedEmployee = createAction(
    '[Employee] selected Employee', 
    props<{employee: Employee}>()
);
