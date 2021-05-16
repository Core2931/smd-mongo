import { composeWithMongoose } from "graphql-compose-mongoose";
import mongoose from "mongoose";


const { Schema } = mongoose;

const AnnouncementSchema = new Schema({
    topic: {type:String, index:true },
    detail: {type: String, index:true},
    timestamp: {type: Date, default: Date.now },
    url: {type: String, require: false},
    ownerName:{
        type: String,
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

export const AnnouncementModel = mongoose.model("Annoucement", AnnouncementSchema);

export const AnnouncementTC = composeWithMongoose(AnnouncementModel, baseOptions);

export default AnnouncementModel;
