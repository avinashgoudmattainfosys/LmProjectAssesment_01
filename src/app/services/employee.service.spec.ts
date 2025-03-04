import { TestBed } from '@angular/core/testing';
import { EmployeeService } from './employee.service';
import { Employee, EmployeesResponse } from '../Models/employee.model';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('EmployeeService', () => {
  let service: EmployeeService;
  let httpClientMock: jasmine.SpyObj<HttpClient>;
  let storeMock: jasmine.SpyObj<Store>;

  let employeeResponse: EmployeesResponse = {
    employees: []
  };
  beforeEach(() => {
    storeMock = jasmine.createSpyObj('Store', ['dispatch', 'select']);
    httpClientMock = jasmine.createSpyObj('HttpClient', ['get', 'post', 'delete']);
    TestBed.configureTestingModule(
      {
        providers: [
          EmployeeService,
          { provide: HttpClient, useValue: httpClientMock },
          { provide: Store, useValue: storeMock }
        ]
      }
    );
    service = TestBed.inject(EmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('saveEmployee', () => {
    it('should send a POST request to save the employee', () => {
      const employee: Employee =
      {
        "id": 1,
        "firstName": "fname",
        "lastName": "lname",
        "gender": "Male",
        "aliases": [],
        "address": {

          "streetAddress1": "",
          "streetAddress2": "",
          "state": "",
          "city": "",
          "zip": "",
          "country": "",
        }
      };
      httpClientMock.post.and.returnValue(of({}));
      service.saveEmployee(employee).subscribe();
      expect(httpClientMock.post).toHaveBeenCalledWith('http://localhost:5089/Employee', employee);

    });
  });

  describe('deleteEmployee', () => {
    it('should send a DELETE request to delete the employee', () => {
      const employeeId = 1;
      httpClientMock.delete.and.returnValue(of({}));
      service.deleteEmployee(employeeId).subscribe();
      expect(httpClientMock.delete).toHaveBeenCalledWith(`http://localhost:5089/Employee/${employeeId}`);
    });
  });

  describe('getAllEmployees', () => {
    it('should send a GET request to fetch all employees', () => {
      const mockEmployees: EmployeesResponse = {
        employees: [
          { id: 1, firstName: 'John', lastName: 'Doe', gender: 'Male', aliases: [], address: { streetAddress1: '', streetAddress2: '', state: '', city: '', zip: '', country: '' } },
          { id: 2, firstName: 'Jane', lastName: 'Doe', gender: 'Female', aliases: [], address: { streetAddress1: '', streetAddress2: '', state: '', city: '', zip: '', country: '' } }
        ]
      };
      httpClientMock.get.and.returnValue(of(mockEmployees));
      service.getAllEmployees().subscribe((response) => {
        expect(response).toEqual(mockEmployees);
      });
      expect(httpClientMock.get).toHaveBeenCalledWith('http://localhost:5089/Employee');
    });
  });

});
