import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { DatagridComponent } from './datagrid.component';
import { provideMockStore } from '@ngrx/store/testing';
import { loadEmployees } from '../storage/employeeResponse/empoyeeResponse.actions';
import { EmployeesResponse } from '../Models/employee.model';
import { of } from 'rxjs';
// Mock data to be returned from the store selector
const initialState = {
  employeeResponse: { employees: [] } as EmployeesResponse
};
describe('DatagridComponent', () => {
  let component: DatagridComponent;
  let fixture: ComponentFixture<DatagridComponent>;
  let store: Store
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatagridComponent]
      , providers: [
        provideMockStore({ initialState })  // Mock store with initialState
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatagridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store =TestBed.inject(Store);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('should dispatch loadEmployees on ngOnInit', () => {
  //   // Spy on store.dispatch to ensure loadEmployees is dispatched
  //   const dispatchSpy = spyOn(store, 'dispatch');

  //   // Call ngOnInit manually (since we're testing it outside the component lifecycle)
  //   component.ngOnInit();

  //   expect(dispatchSpy).toHaveBeenCalledWith(loadEmployees());
  // });

  // it('should select employeeResponse from the store', () => {
  //   // Simulate the store's state and ensure employees$ is correctly set
  //   const employeesResponse: EmployeesResponse = { employees: [] };  // Mocked response

  //   store.dispatch(loadEmployees());
  //   store.select = jasmine.createSpy().and.returnValue(of(employeesResponse));  // Mock selector

  //   component.ngOnInit();
  //   fixture.detectChanges();

  //   expect(component.employees$).toBeTruthy();
  //   component.employees$?.subscribe(employees => {
  //     expect(employees).toEqual(employeesResponse);
  //   });
  // });
});
