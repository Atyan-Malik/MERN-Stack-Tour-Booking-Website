import mongoose from "mongoose";


const tourSchema=new mongoose.Schema(
    {

   title:{
    type:String,
    require:true,
    unique:true,
    },
   city:{
    type:String,
    require:true,
   
    },
   address:{
    type:String,
    require:true,
    
    },
   distance:{
    type:Number,
    require:true,
    },
   photo:{
    type:String,
    require:true,
   
    },
   desc:{
    type:String,
    require:true,
   
    },
   price:{
    type:Number,
    require:true,
   
    },
   maxGroupSize:{
    type:Number,
    require:true,
   
    },
    reviews:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Review",
    }],

    feature:{
     type:"Boolean",
      default:false,
    },
    

},{timestamps:true}
);

export default mongoose.model("Tour",tourSchema)