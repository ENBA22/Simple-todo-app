const mon=require("mongoose")

const userschema =new mon.Schema({
    name:String,
    email:String,
    password:String
})


const usermodel=mon.model("user",userschema)

module.exports=usermodel