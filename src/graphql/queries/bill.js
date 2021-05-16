import { BillTC } from "../../models";

export const bills = BillTC.getResolver("findMany");
export const billById = BillTC.getResolver("findById");
export const billOne = BillTC.getResolver("findOne");
