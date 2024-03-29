const mongoose = require("mongoose")
const activities = mongoose.Schema({
    image:{
        type:String , 
        required:true
    },
    name:{
        type:String , 
        required:true
    },
    nameTwo:{
        type:String,
        required:true
    },
    descriptionOne:{
        type:String , 
        required:true
    },
    descriptionTwo:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("activities" , activities)