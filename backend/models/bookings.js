const mongoose=require('mongoose');

const bookingSchema=new mongoose.Schema({
    booking_id:{
        type:Number,
        required:true
    },

    property_id:{
        type: mongoose.Schema.Types.ObjectId,   // ObjectId reference
        ref: 'Listings',                        // model name of the referenced collection
        required: true
    },

    user_id:{
        type: mongoose.Schema.Types.ObjectId,   
        ref: 'User',                        
        required: true
    },
    check_in:{
        type:Date,
        default: Date.now
    },
    check_out:{
        type:Date,
       
    }
});

module.exports=mongoose.model('Booking', bookingSchema);