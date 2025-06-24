const mongoose=require('mongoose');

const listingSchema= new mongoose.Schema({
    property_id:{
        type: mongoose.Schema.Types.ObjectId,  // Auto-generated unique ID
        default: () => new mongoose.Types.ObjectId()
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
        type:Boolean,
        default: false
    },

    amenities: {
    type: [String], 
    default: []     
  },

  image: { type: String },
},

{ timestamps: true });

module.exports=mongoose.model('Listings',listingSchema); 