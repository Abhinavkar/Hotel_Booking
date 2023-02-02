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
router.get("/", async (req,res) => {
	
	try{
		const hotels= await Hotel.find(  );
		res.status(200).json(hotels);
	}
	catch(err){
		res.status(500).json(err);}
	
}); 
export default router ;
