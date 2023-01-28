import  express  from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js"




const app =express()
dotenv.config();

const connect = async()=>{
	try{
		await mongoose.connect(process.env.DbUrl);
		console.log("Connected to Database")
	} 
	catch (error) 
	{
		throw error ;
	}
	mongoose.connection.on("disconnected",()=>{
	console.log("MongoDb Disconnected ")
	})
	mongoose.connection.on("Connected ",()=>{
	console.log("MongoDb Connnected ")
	})
};

//middle ware 	
app.use("/auth",authRoutes);


app.listen(8000,()=>{
	connect()
	console.log("Connected to Backend");
});	