import { BillTC } from "../../models";
export const createBill = BillTC?.getResolver("createOne");
export const removeBillById = BillTC?.getResolver("removeById");
