import express from "express"
import Hotel from "../models/Hotels.js";
const router  = express.Router();
router.post("/",async(req,res)=>{
	const newHotel = new Hotel(req.body)
	try{
		const savedHotel = await newHotel.save()
		res.status(200).json(savedHotel)
	}
	catch(err){
		res.status(500).json(err)}
	
});

//Update
router.put("/:id",async(req,res)=>{
	
	try{
		//const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id,{$set:} )
		res.status(200).json(savedHotel)
	}
	catch(err){
		res.status(500).json(err)}
	
});

//delet
router.post("/",async(req,res)=>{
	const newHotel = new Hotel(req.body)
	try{
		const savedHotel = await newHotel.save()
		res.status(200).json(savedHotel)
	}
	catch(err){
		res.status(500).json(err)}
	
});

// get 
router.post("/",async(req,res)=>{
	const newHotel = new Hotel(req.body)
	try{
		const savedHotel = await newHotel.save()
		res.status(200).json(savedHotel)
	}
	catch(err){
		res.status(500).json(err)}
	
});
//getall 
router.post("/",async(req,res)=>{
	const newHotel = new Hotel(req.body)
	try{
		const savedHotel = await newHotel.save()
		res.status(200).json(savedHotel)
	}
	catch(err){
		res.status(500).json(err)}
	
});
export default router ;
