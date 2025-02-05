import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { counterReducer } from './storage/counter/counter.reducer';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { employeeReducer } from './storage/employee/employee.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true })
              , provideRouter(routes)
              , provideStore(
                { 
                  count: counterReducer, 
                  employees: employeeReducer ,
                  test: function(){}
                })
            ]
};
