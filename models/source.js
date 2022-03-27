import mongoose from "mongoose";
const SourceSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
},{
    timestamps:true,
})

const sourceSchema = mongoose.model('Source', SourceSchema);

export default sourceSchema;