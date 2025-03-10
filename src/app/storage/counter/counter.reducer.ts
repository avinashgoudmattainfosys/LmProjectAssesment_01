import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';
export type CounterState = number;
export const initialState: CounterState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);