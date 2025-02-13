import { createReducer, on } from '@ngrx/store';
import { EmployeesResponse } from '../../Models/employee.model';
import { loadEmployeeRespoonseSuccess } from './empoyeeResponse.actions';

export const initialState: EmployeesResponse = { employees: [] };

export const employeeResponseReducer = createReducer(
    initialState,
    on(loadEmployeeRespoonseSuccess, (state, { employeeResponse }) => ({ ...state, ...employeeResponse }))
);