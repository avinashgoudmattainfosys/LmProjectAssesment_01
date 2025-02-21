import { CommonModule } from '@angular/common';
import { Component,inject,OnInit, signal } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, FormArray } from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {Validators} from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { Store, select } from '@ngrx/store';
// import { addEmployee } from '../storage/employee/employee.actions';
import { Employee } from '../Models/employee.model';
import { Observable } from 'rxjs';
import { AppState, selectedEmployee } from '../storage/app.state';
import { EmployeeState } from '../storage/employee/employee.reducer';
// import { AppState, employeeListResponse } from '../storage/app.state';

@Component({
  selector: 'app-demo-reactive-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './demo-reactive-form.component.html',
  styleUrl: './demo-reactive-form.component.css',
  standalone: true,
})
export class DemoReactiveFormComponent implements OnInit{
  employee$: Observable<EmployeeState> | undefined;
  constructor(private employeeService: EmployeeService,
    private store: Store<AppState>){
    // this.employees$ = store.select('employees');
  }

  ngOnInit() {
    this.employee$ = this.store.pipe(select(selectedEmployee));
    this.employee$.subscribe(obj => {
      debugger;
      if (obj) {
        this.profileForm.patchValue({
          firstName: obj.firstName,
          lastName: obj.lastName,
          address: {
            street: obj.address.streetAddress1, // Correct field name
            city: obj.address.city,
            state: obj.address.state,
            zip: obj.address.zip
          },
          aliases: obj.aliases
        });
      }
    });
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
