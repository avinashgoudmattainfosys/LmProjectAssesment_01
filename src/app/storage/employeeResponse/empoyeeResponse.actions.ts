import { createAction, props } from '@ngrx/store';
import { EmployeesResponse } from '../../Models/employee.model';

export const loadEmployees = createAction('[Employee Grid] Load Employees');
export const loadEmployeesResponseSuccess = createAction(
    '[Employee Grid] Load Employees Success',
    props<{ employeeResponse: EmployeesResponse }>()
);