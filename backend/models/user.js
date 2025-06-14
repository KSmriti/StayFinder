const moongoose= require("mongoose");

const userSchema= new moongoose.Schema({
    user_id:{
        type:Number,
        required:true
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

module.exports=moongoose.model('User', userSchema);