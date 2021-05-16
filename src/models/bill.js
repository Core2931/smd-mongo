import { composeWithMongoose } from "graphql-compose-mongoose";
import mongoose from "mongoose";

const { Schema } = mongoose;

const enumStatus ={
    PAID: "Paid",
    OVERDUE: "Overdue"
}

const BillSchema = new Schema({
        waterbill: {type: Number, required:true, default:0},
        elecbill: {type: Number, required:true, default:0},
        roombill: {type: Number, required:true, default:0},
        timestamp: {type: Date, default: Date.now},
        status: {type: String, index:true, enum:enumStatus},
        url: {tpye:String},
        ownerName:{type:String, require:true, ref:"User"},

    });

const baseOptions = {
    inputType: {
      removeFields: ["timestamp"],
    },
  };

export const BillModel = mongoose.model("Bill", BillSchema);

export const BillTC = composeWithMongoose(BillModel, baseOptions);

export default BillModel;
