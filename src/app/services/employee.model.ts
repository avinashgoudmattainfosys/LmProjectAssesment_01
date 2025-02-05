import { Address } from "./address.model";

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  address: Address;
  aliases: string[]
}
