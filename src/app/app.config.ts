import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { counterReducer } from './storage/counter/counter.reducer';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { employeeReducer } from './storage/employee/employee.reducer';
import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { EmployeeService } from './services/employee.service';
import { employeeResponseReducer } from './storage/employeeResponse/employeeResponse.reducer';
import { EmployeeResponseEffects } from './storage/employeeResponse/employeeresponse.effects';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true })
              , provideRouter(routes)
              , provideStore(
                { 
                  count: counterReducer, 
                  employee: employeeReducer ,
                  employeeResponse: employeeResponseReducer ,
                })
                ,provideHttpClient()
                ,provideEffects(EmployeeResponseEffects)
                ,EmployeeService
            ]
};
