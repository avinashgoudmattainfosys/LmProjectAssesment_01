import {State, createReducer, on} from '@ngrx/store'
import { Employee } from '../../services/employee.model'
import { addEmployee, loadEmployeesSuccess } from './employee.actions';

export const initialState: Employee[] = [];

 export const employeeReducer = createReducer(
    initialState,
    on(addEmployee, (state, {employee}) => [...state,employee]),
    on(loadEmployeesSuccess, (state, {employees}) => [...employees])
)

 