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

    booking_date:{
        type:Date,
        default: Date.now
    }
});

module.exports=moongoose.model('Booking', bookingSchema);