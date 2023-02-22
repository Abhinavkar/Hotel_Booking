import Hotel from "../models/Hotels.js";
export const createHotel = async(res,req,next)=>{
	try{
		const updatedHotel = await Hotel.findByIdAndUpdate( 
			req.params.id ,{$set : req.body},{new:true})
		res.status(200).json(updatedHotel);
	}
	catch(err){
		next(err);
	}
	

}

export const updateHotel = async(res,req,next)=>{
	
	try{
		const savedHotel = await newHotel.save()
		res.status(200).json(savedHotel)
	}
	catch(err){
		next(err);
	}
	

}
export const deleteHotel = async(res,req,next)=>{
	
	try{
		await Hotel.findByIdAndUpdate( req.params.id );
		res.status(200).json("Deleted Hotel");
	}
	catch(err){
		next(err);
	}
	

}
export const getHotel = async(res,req,next)=>{
	
	try{
		const hotel= await Hotel.findById( req.params.id );
		res.status(200).json(hotel);
	}
	catch(err){
		next(err);
	}
	

}
export const getHotels = async(res,req,next)=>{
	
	try{
		const hotels= await Hotel.find();
		res.status(200).json(hotels);
	}
	catch(err){
		next(err);
	}
	

}