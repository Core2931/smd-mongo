import { composeWithMongoose } from "graphql-compose-mongoose";
import mongoose from "mongoose";


const { Schema } = mongoose;

const SuggestSchema = new Schema({
    timestamp: { type: Date, default: Date.now },
    fullname: { type:String, index:true, require:false },
    detail: { type: String, index:true, require: true },
    tel: {type: String, index:true, require:true },
    ownerName: {
        type: String,
        require: true,
        index: true,
        ref: "User",
    },

});
const baseOptions = {
    inputType: {
      removeFields: ["timestamp"],
    },
  };

export const SuggestModel = mongoose.model("Suggest", SuggestSchema);

export const SuggestTC = composeWithMongoose(SuggestModel, baseOptions);

export default SuggestModel;