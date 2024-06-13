const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "busNo":{type:String,required:true},
        "busName":{type:String,required:true},
        "busRoot":{type:String,required:true},
        "driverName":{type:String,required:true}    }
)

const busModel = mongoose.model("buses",schema)
module.exports={busModelModel}