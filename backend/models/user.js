const mongoose= require("mongoose");

const userSchema= new mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,  // Auto-generated unique ID
        default: () => new mongoose.Types.ObjectId()
    },
    username:{
        type: String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }
});

module.exports=mongoose.model('User', userSchema);