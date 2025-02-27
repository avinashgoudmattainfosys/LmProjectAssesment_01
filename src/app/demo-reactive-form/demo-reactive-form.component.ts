import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, FormArray } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { Store, select } from '@ngrx/store';
// import { addEmployee } from '../storage/employee/employee.actions';
import { Employee } from '../Models/employee.model';
import { catchError, Observable, tap } from 'rxjs';
import { AppState, selectedEmployee } from '../storage/app.state';
import { EmployeeState } from '../storage/employee/employee.reducer';
import { ActivatedRoute, Router } from '@angular/router';
// import { AppState, employeeListResponse } from '../storage/app.state';

@Component({
  selector: 'app-demo-reactive-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './demo-reactive-form.component.html',
  styleUrl: './demo-reactive-form.component.css',
  standalone: true,
})
export class DemoReactiveFormComponent implements OnInit {
  isEditMode: boolean = false;
  mode?: string | null = null;
  employee$: Observable<EmployeeState> | undefined;
  employeeAfterSave$: Observable<any> | undefined;
  constructor(private employeeService: EmployeeService,
    private store: Store<AppState>
    , private router: Router
    , private route: ActivatedRoute) {
    // this.employees$ = store.select('employees');
  }

  ngOnInit() {
    this.employee$ = this.store.pipe(select(selectedEmployee));
    this.employee$.subscribe(obj => {
      if (obj) {
        this.bindFormData(obj);
      }
    });

    this.route.paramMap.subscribe(params => {
      this.mode = params.get('mode');
      this.isEditMode = (this.mode !== 'view');
      if (!this.isEditMode) {
        this.profileForm.disable();
      }
    })
  }


  private formBuilder = inject(FormBuilder);
  profileForm = this.formBuilder.group({
    id: [null as number | null],
    firstName: ['', Validators.required],
    lastName: new FormControl(''),
    address: this.formBuilder.group({
      streetAddress1: new FormControl(''),
      streetAddress2: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
      country: new FormControl('')
    }),
    aliases: this.formBuilder.array([this.formBuilder.control('')]),
  });
  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }
bindFormData(employee:Employee){
  this.profileForm.patchValue({
    id: employee.id,
    firstName: employee.firstName,
    lastName: employee.lastName,
    address: {
      streetAddress1: employee.address.streetAddress1,
      streetAddress2: employee.address.streetAddress2, // Correct field name
      city: employee.address.city,
      state: employee.address.state,
      zip: employee.address.zip,
      country: employee.address.country
    },
    aliases: employee.aliases
  });
}
  addAlias() {
    this.aliases.push(this.formBuilder.control(''));
  }
  onSubmit() {
    this.saveEmployee();
  }
  saveEmployee() {
    this.employeeService.saveEmployee(this.profileForm.value as Employee).subscribe(response => {
      this.router.navigate(['/employeeinfo']);
    });
  }
  cancel() {
    this.router.navigate(['/employeeinfo']);
  }
}
