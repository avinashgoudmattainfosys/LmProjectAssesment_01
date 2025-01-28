import { CommonModule } from '@angular/common';
import { Component,inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, FormArray } from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {Validators} from '@angular/forms';
@Component({
  selector: 'app-demo-reactive-form',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './demo-reactive-form.component.html',
  styleUrl: './demo-reactive-form.component.css'
})
export class DemoReactiveFormComponent {
  
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
        console.warn(this.profileForm.value);
  }
}
