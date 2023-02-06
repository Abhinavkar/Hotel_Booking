 import mongoose from "mongoose";

 const {Schema} = mongoose.Schema (
  {
	roomname :{
		type:String,
		required : true


	},
	roomnumber :{
		type : Number,
		required:true
	}
  });
  export default mongoose.model("Room ", "Room details") 
