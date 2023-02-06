import  express  from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js"
import roomsRoutes  from  "./routes/rooms.js"
import hotelsRoutes  from "./routes/hotels.js"
import usersRoutes from  "./routes/users.js"

const app =express()
dotenv.config();

const connect =  async ()=>{
	try 
	{
		await mongoose.connect(process.env.DbUrl);
		console.log('connected to database')
	} 
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

//middle ware 

app.use (express.json());

app.use("/api/auth",authRoutes);
app.use("/api/rooms",roomsRoutes);
app.use("/api/hotels",hotelsRoutes);
app.use("/api/users",usersRoutes);

app.use((err,req,res,next)=>{
	const errorstatus = err.status || 500 
	const errormessage = err.message|| "Something Went wrong !" 

	return res.status(errorstatus).json({
		success:false,
		status : errorstatus,
		message: errormessage,
		stack:err.stack,

	});

});



app.listen(8800,()=>{
	connect()
	console.log("Connected to Backend");
});	