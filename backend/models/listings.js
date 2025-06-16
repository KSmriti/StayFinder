const mongoose=require('mongoose');

const listingSchema= new mongoose.Schema({
    property_id:{
        type: Number,
        required:true,
        unique:true
    },
    property_name:{
        type:String,
        required:true
    },
    property_location:{
        type:String,
        required:true
    },
    price: {
    type: Number,
    required: true,
    min: 0 
    },
    
    booked_status:{
        type:Boolean
    },

    rating:{
        type:Number,
        required:true,
        min:1,
        default: 1
    },

    amenities: {
    type: [String], 
    default: []     
  }
});

module.exports=mongoose.model('Listings',listingSchema); 