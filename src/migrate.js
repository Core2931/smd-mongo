import "./mongoose-connect";
import { CustomerModel, AdminModel, ProductModel, CartModel} from "./models";
import admins from "./data/admins.json";
import customers from "./data/customers.json";


const migrate = async () => {
  await AdminModel.create(admins.map((user) => ({ ...user })));
  await CustomerModel.create(customers.map((user) => ({ ...user })));
  console.log("Migrate completed");
};
migrate();
