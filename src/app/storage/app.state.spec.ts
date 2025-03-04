import { createSelector } from '@ngrx/store';
import { AppState, employeeResponse, employee, employeeListResponse, selectedEmployee } from './app.state'; // Import your selectors
import { Employee } from '../Models/employee.model';

describe('AppState Selectors', () => {
  let state: AppState;

  beforeEach(() => {
    state = {
      counter:  0 ,
      employee: {
        "id": 1,
      "firstName": "fname",
      "lastName": "lname",
      "gender":"Male",
      "aliases": [],
      "address": {
  
        "streetAddress1": "",
        "streetAddress2": "",
        "state": "",
        "city": "",
        "zip": "",
        "country": "",
      }
    } as Employee, 
      employeeResponse: { employees: [
        {
            "id": 1,
          "firstName": "fname",
          "lastName": "lname",
          "gender":"Male",
          "aliases": [],
          "address": {
      
            "streetAddress1": "",
            "streetAddress2": "",
            "state": "",
            "city": "",
            "zip": "",
            "country": "",
          }
        } as Employee
      ] },  
    };
  });

  it('should select the employeeResponse state', () => {
    const result = employeeResponse(state);
    expect(result).toEqual(state.employeeResponse);
  });

  it('should select the employee state', () => {
    const result = employee(state);
    expect(result).toEqual(state.employee);
  });

  it('should select the employee list response', () => {
    const result = employeeListResponse(state);
    expect(result).toEqual(state.employeeResponse);
  });

  it('should select the selected employee', () => {
    const result = selectedEmployee(state);
    expect(result).toEqual(state.employee);
  });
});
