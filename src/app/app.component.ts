import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MyCounterComponent} from '../app/my-counter/my-counter.component';
import { counterReducer } from './storage/counter.reducer';
import { StoreModule } from '@ngrx/store';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  title = 'tour-of-heroes';
}


 