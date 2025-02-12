import { CommonModule } from '@angular/common';
import { Component,inject,OnInit, signal } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, FormArray } from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {Validators} from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { Store, select } from '@ngrx/store';
import { addEmployee, loadEmployees } from '../storage/employee/employee.actions';
import { Employee } from '../services/employee.model';
import { Observable } from 'rxjs';
import { DatagridComponent } from '../datagrid/datagrid.component';

@Component({
  selector: 'app-demo-reactive-form',
  imports: [ReactiveFormsModule,CommonModule,DatagridComponent],
  templateUrl: './demo-reactive-form.component.html',
  styleUrl: './demo-reactive-form.component.css'
})
export class DemoReactiveFormComponent implements OnInit{
  employees$: Observable<Employee[]> | undefined;
  constructor(private employeeService: EmployeeService,
    private store: Store<{ employees: Employee[] }>){
    // this.employees$ = store.select('employees');
  }

  ngOnInit() {
    this.employees$ = this.store.select('employees');
    this.store.dispatch(loadEmployees());
  }
 
 

  private formBuilder = inject(FormBuilder);
  profileForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: new FormControl(''),
    address: this.formBuilder.group({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
    }),
    aliases: this.formBuilder.array([this.formBuilder.control('')]),
  });
  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
       this.aliases.push(this.formBuilder.control(''));
  }
  onSubmit(){
        // TODO: Use EventEmitter with form value
        this.employeeService.saveEmployee(this.profileForm.value as Employee);
  }
}
