import { createReducer, on } from '@ngrx/store';
import { EmployeesResponse } from '../../Models/employee.model';
import { loadEmployeesResponseSuccess } from './empoyeeResponse.actions';

export const initialState: EmployeesResponse = { employees: [] };

export const employeeResponseReducer = createReducer(
    initialState,
    on(loadEmployeesResponseSuccess, (state, { employeeResponse }) => ({ ...state, ...employeeResponse }))
);