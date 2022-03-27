import mongoose from "mongoose";
const MovieSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    originalTitle:{
        type:String,
        required:true,
    },
    genreId:[{ type: Schema.Types.ObjectId, ref: 'Genre' }],
    sourceId:[{ type: Schema.Types.ObjectId, ref: 'Source' }],
    m3u8:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }
},{
    timestamps:true,
})

const movieSchema = mongoose.model('Movie', MovieSchema);

export default movieSchema;