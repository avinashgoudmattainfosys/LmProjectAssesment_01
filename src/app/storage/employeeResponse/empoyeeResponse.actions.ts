import { createAction, props } from '@ngrx/store';
import { EmployeesResponse } from '../../Models/employee.model';

export const loadEmployees = createAction('[Employee Grid] Load Employees');
export const loadEmployeesResponseSuccess = createAction(
    '[Employee Grid] Load Employees Success',
    props<{ employeeResponse: EmployeesResponse }>()
);

export const deleteEmployee = createAction(
    '[Delete Employee From Grid] Delete Employee',
    props<{ id: number }>()
);

    
export const deleteEmployeeSuccess = createAction(
    '[Delete Employee From Grid] Delete Employee Success',
    props<{  id: number }>()
);
