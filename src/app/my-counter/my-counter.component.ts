import { Component } from '@angular/core';
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
export class MyCounterComponent {

  count$?: Observable<number> 

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  increment() {
    this.store.dispatch(increment());
    // TODO: Dispatch an increment action
  }

  decrement() {
    this.store.dispatch(decrement());
    // TODO: Dispatch a decrement action
  }

  reset() {
    this.store.dispatch(reset());
    // TODO: Dispatch a reset action
  }
}
