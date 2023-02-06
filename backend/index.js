import  express  from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js"
import roomsRoutes  from  "./routes/rooms.js"
import hotelsRoutes  from "./routes/hotels.js"
import usersRoutes from  "./routes/users.js"




const app =express();
dotenv.config();

const connect = async()=>{
	try 
	{
		 await mongoose.connect(process.env.DbUrl ,{useNewUrlParser:true,useUnifiedTopology:true},()=>{ console.log('connected to database');}
	)} 
	catch (error) 
	{
		throw error ;
	};
};
	
	mongoose.connection.on("disconnected",()=>
	{
		console.log("MongoDb Disconnected ");
	})
	mongoose.connection.on("Connected ",()=>
	{
		console.log("MongoDb Connnected ");
	})


//middle ware 

app.use (express.json());
app.use("/api/auth",authRoutes);
app.use("/api/rooms",roomsRoutes);
app.use("/api/hotels",hotelsRoutes);
app.use("/api/users",usersRoutes);



app.listen(8800,()=>{
	connect()
	console.log("Connected to Backend");
});	