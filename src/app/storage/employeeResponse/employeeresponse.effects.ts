import { Actions, createEffect, ofType } from "@ngrx/effects"
import { EMPTY, catchError, exhaustMap, map } from "rxjs"
import { EmployeeService } from "../../services/employee.service"
import { Injectable, inject } from "@angular/core";
import { loadEmployeesResponseSuccess, loadEmployees, deleteEmployeeSuccess, deleteEmployee } from "./empoyeeResponse.actions";

@Injectable()
export class EmployeeResponseEffects {
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
                        return loadEmployeesResponseSuccess({ employeeResponse });
                    }),
                    catchError((error) => {
                        console.error('Error loading employees', error);
                        return EMPTY;
                    })
                );
            })
        );
    });

    deleteEmployees$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(deleteEmployee),
            exhaustMap(action  => {
                console.log('Delete Action received');
                return this.employeeService.deleteEmployee(action.id).pipe(
                    map(deletedEmployeeResponse => {
                        return deleteEmployeeSuccess({id:action.id});
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

