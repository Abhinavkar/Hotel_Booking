import express from "express"
import Hotel from "../models/Hotels.js";
import { createError } from "../utils/error.js";
const router  = express.Router();
router.post("/",async(req,res)=>{
	
});

router.put("/:id", async (req,res) => {
	
	try{
		const updatedHotel = await Hotel.findByIdAndUpdate( req.params.id ,{$set : req.body},{new:true})
		res.status(200).json(updatedHotel);
	}
	catch(err){
		res.status(500).json(err);}
	
}); 
router.delete("/:id", async (req,res) => {
	
	try{
		await Hotel.findByIdAndUpdate( req.params.id );
		res.status(200).json("Deleted Hotel");
	}
	catch(err){
		res.status(500).json(err);}
	
}); 
router.get("/:id", async (req,res) => {
	
	try{
		const hotel= await Hotel.findById( req.params.id );
		res.status(200).json(hotel);
	}
	catch(err){
		res.status(500).json(err);}
	
}); 
router.get("/", async (req,res,next) => {
	//const failed = true
	// if(failed) return next(createError(401,"You are not authenticated"))
	 
	try{
		const hotels= await Hotel.find();
		res.status(200).json(hotels);
	}
	catch(err){
		next(err)}
	
}); 
export default router ;
