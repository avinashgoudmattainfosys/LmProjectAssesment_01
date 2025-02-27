import { createReducer, on } from '@ngrx/store';
import { EmployeesResponse } from '../../Models/employee.model';
import { deleteEmployeeSuccess, loadEmployeesResponseSuccess } from './empoyeeResponse.actions';
export type EmployeesResponseState = EmployeesResponse;
export const initialState: EmployeesResponse = { 
    employees: []
 };

export const employeeResponseReducer = createReducer(
    initialState,
    on(loadEmployeesResponseSuccess, (state, { employeeResponse }) => ({ ...state, ...employeeResponse })),
    on(deleteEmployeeSuccess, (state, { id }) => ({
        ...state,
        employees: state.employees.filter(employee => employee.id !== id)  // Remove the employee with the given id
      }))

);


