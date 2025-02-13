import { Actions, createEffect, ofType } from "@ngrx/effects"
import { EMPTY, catchError, exhaustMap, map } from "rxjs"
import { EmployeeService } from "../../services/employee.service"
import { Injectable, inject } from "@angular/core";
import { loadEmployeeRespoonseSuccess, loadEmployees } from "./empoyeeResponse.actions";

@Injectable()
export class EmployeeEffects {
    private actions$ = inject(Actions);
    constructor(
        private employeeService: EmployeeService
    ) {

    }
    loadEmployees$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadEmployees),
            exhaustMap(() => {
                console.log('Action received');
                return this.employeeService.getAllEmployees().pipe(
                    map(employeeResponse => {
                        console.log('Employees loaded', employeeResponse);
                        return loadEmployeeRespoonseSuccess({ employeeResponse });
                    }),
                    catchError((error) => {
                        console.error('Error loading employees', error);
                        return EMPTY;
                    })
                );
            })
        );
    });
}

