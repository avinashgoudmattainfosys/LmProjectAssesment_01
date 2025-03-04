import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import {increment, decrement,reset} from '../storage/counter/counter.actions';
@Component({
  selector: 'app-my-counter',
  imports: [CommonModule],
  templateUrl: './my-counter.component.html',
  styleUrl: './my-counter.component.css',
  standalone: true
})
export class MyCounterComponent implements OnInit  {

  count$?: Observable<number> 

  constructor(private store: Store<{ count: number }>) {

  }
  ngOnInit(): void {
    this.count$ = this.store.select('count');
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
