import mongoose from "mongoose";
import { IUser } from "../interfaces/IUser";

const UserSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  avatar: {
    type : String,
  },

  date: {
    type: Date,
    default: Date.now,
  },

  boughtDream : [{
    type : mongoose.Types.ObjectId,
    ref : "Dream",
  }],

  soldDream : [{
    type : mongoose.Types.ObjectId,
    ref : "Dream",
  }],

  coin : {
    type : Number,
    required : true,
    default : 0,
  }
  
});

export default mongoose.model<IUser & mongoose.Document>("User", UserSchema);
