// import { createFeatureSelector, createSelector } from '@ngrx/store';
// import { EmployeeListState } from '../../storage/employee/employee.reducer';
// import { EmployeeModel } from "../../services/employee.model";

// // Get complete state of the favorites products in application
// export const selectAppState = createFeatureSelector<EmployeeListState>('employees');

// // get All favorites products
// export const selectEmployees = createSelector(
//   selectAppState,
//   (state: EmployeeListState) => state.employees
// );

// // // get One favorite product by ID
// // export const selectProductById = createSelector(
// //   selectProducts,
// //   (products: EmployeeModel[], props: { productId: number }) =>
// //     products.find(product => product.id === props.productId)
// // );