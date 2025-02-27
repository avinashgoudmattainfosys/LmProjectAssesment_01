import { ActionReducerMap, createSelector } from '@ngrx/store';
import { CounterState, counterReducer } from './counter/counter.reducer';
import { EmployeeState, employeeReducer } from './employee/employee.reducer';
import { EmployeesResponseState, employeeResponseReducer } from './employeeResponse/employeeResponse.reducer';

export interface AppState {
    counter: CounterState;
    employee: EmployeeState;
    employeeResponse: EmployeesResponseState;
  }

// export const reducers: ActionReducerMap<AppState> = {
//   counter: counterReducer,
//   employees: employeeReducer,
//   employeeResponse: employeeResponseReducer
// };

export const employeeResponse = (state: AppState) => state.employeeResponse;
export const employee = (state: AppState) => state.employee;

export const employeeListResponse = createSelector(
  employeeResponse,
  (employeeResponse: EmployeesResponseState) => {
      return employeeResponse;
  }
);

export const selectedEmployee= createSelector(
  employee,
  (employee: EmployeeState) => {
      return employee;
  }
);

