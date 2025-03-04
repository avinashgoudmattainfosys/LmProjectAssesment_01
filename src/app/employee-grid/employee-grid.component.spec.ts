import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeGridComponent } from './employee-grid.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';
import { employeeListResponse } from '../storage/app.state';
import { employeeReducer } from '../storage/employee/employee.reducer';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';
import { loadEmployees } from '../storage/employeeResponse/empoyeeResponse.actions';
import { Employee, EmployeesResponse } from '../Models/employee.model';
import { of } from 'rxjs';

describe('EmployeeGridComponent', () => {
  let component: EmployeeGridComponent;
  let fixture: ComponentFixture<EmployeeGridComponent>;
  let store: Store;
  let router: Router;

  const mockEmployeeResponse = {
    employees: [
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
    }
    ]
  } as EmployeesResponse;

  beforeEach(async () => {
    const storeSpy = jasmine.createSpyObj('Store',['dispatch','pipe']);
    storeSpy.pipe.and.returnValue(of(mockEmployeeResponse));
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({})
        ,EmployeeGridComponent 
      ],
      providers: [
        { provide: Store, useValue: storeSpy },
        { provide: Router, useValue: routerSpy },
        EmployeeService
      ],
    })
    .compileComponents();

    store = TestBed.inject(Store);
    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(EmployeeGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch loadEmployees action on init', () => {
    const action = loadEmployees();
    component.ngOnInit();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should navigate to add employee form on addEmployee', () => {
    component.addEmployee();
    expect(router.navigate).toHaveBeenCalledWith(['/reactiveform', 'add']);
  });

  it('should navigate to view employee details on detailsEmployee', () => {
    const employee =   {
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
  } as Employee;
 
    component.detailsEmployee(employee);
    expect(store.dispatch).toHaveBeenCalledWith({ type: '[Employee] selected Employee', employee });
    expect(router.navigate).toHaveBeenCalledWith(['/reactiveform', 'view']);
  });

  it('should navigate to edit employee form on editEmployee', () => {
    const employee =   {
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
  } as Employee;
    component.editEmployee(employee);
    expect(store.dispatch).toHaveBeenCalledWith({ type: '[Employee] selected Employee', employee });
    expect(router.navigate).toHaveBeenCalledWith(['/reactiveform', 'edit']);
  });

  it('should dispatch deleteEmployee action on deleteEmployee', () => {
    const id = 1;
    component.deleteEmployee(id);
    expect(store.dispatch).toHaveBeenCalledWith({ type: '[Delete Employee From Grid] Delete Employee', id });
  });
  
});
