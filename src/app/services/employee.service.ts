import { Injectable } from '@angular/core';
import { Employee, EmployeesResponse} from '../Models/employee.model';
import { Store } from '@ngrx/store';
// import { addEmployee } from '../storage/employee/employee.actions';
// import { EmployeeListState } from '../storage/employee/employee.reducer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient ,private store: Store) { }

  saveEmployee(employee: Employee): Observable<any>{
     return this.http.post("http://localhost:5089/Employee", employee);
  }
  deleteEmployee(id:number): Observable<any>{  
    return this.http.delete(`http://localhost:5089/Employee/${id}`);
 }

  getAllEmployees():Observable<EmployeesResponse> {
     return this.http.get<EmployeesResponse>("http://localhost:5089/Employee");
  }
}
