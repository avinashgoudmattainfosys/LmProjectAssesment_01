import { Address } from "./address.model";

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  aliases: string[];
  address: Address;
}
export interface EmployeesResponse {
  employees: Employee[]
}