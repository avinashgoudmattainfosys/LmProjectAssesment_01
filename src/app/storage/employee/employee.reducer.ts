import {State, createReducer, on} from '@ngrx/store'
import { Employee } from '../../Models/employee.model'
import { selectedEmployee } from './employee.actions';

export type EmployeeState = Employee;
export const initialState: Employee = {
    id: 0,
    firstName: '',
    lastName: '',
    gender: '',
    aliases: [],
    address: {
        streetAddress1: '',
        streetAddress2: '',
        state: '',
        city: '',
        zip: '',
        country: ''
    }
};
export const employeeReducer = createReducer(
    initialState,
    on(selectedEmployee, (state, { employee }) => ({ ...state, ...employee }))
);