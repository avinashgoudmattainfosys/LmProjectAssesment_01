import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../services/employee.model';
import { Store } from '@ngrx/store';
import { loadEmployees } from '../storage/employee/employee.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-datagrid',
  imports: [CommonModule],
  templateUrl: './datagrid.component.html',
  styleUrl: './datagrid.component.css'
})
export class DatagridComponent implements OnInit {
  employees$: Observable<Employee[]> | undefined;
  constructor(private store: Store<{employees: Employee[]}>){

  }
  ngOnInit() {
    this.employees$ = this.store.select('employees');
    this.store.dispatch(loadEmployees());
  }
 
}
 