import mongoose from "mongoose";
import { composeWithMongoose } from "graphql-compose-mongoose";

const { Schema } = mongoose;

const enumStatus = {
  RECEIVED: "Received",
  NOT_VECEIVED: "Not Received"
}

const ProductSchema = new Schema({
    name: {type: String, index:true },
    username: {type: String, index:true},
    quantity: {type:Number, index:true, default:0},
    timestamp: { type: Date, default: Date.now },
    status: {type: String, index:true, enum:enumStatus},
    url: {
      type: String,
      require: true,
    },
    ownerName: {
      type:String,
      require: true,
      index:true,
      ref: "User",
    }
});
const baseOptions = {
  inputType: {
    removeFields: ["timestamp"],
  },
};
export const ProductModel = mongoose.model("Product", ProductSchema);

export const ProductTC = composeWithMongoose(ProductModel, baseOptions);

export default ProductModel;
