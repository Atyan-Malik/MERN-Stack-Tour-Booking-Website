
import mongoose from 'mongoose';


const reviewSchema=new mongoose.Schema(
    {

   ProductId:{
    type:mongoose.Types.ObjectId,
    ref:"Tour",
    },
   username:{
    type:String,
    require:true,
   
    },
   reviewText:{
    type:String,
    require:true,
    
    },
    rating:{
        type:Number,
        require:true,
        min:0,
        max:5,
        default:0,
    },
  

},{timestamps:true}
);

export default mongoose.model("Review",reviewSchema)