import mongoose from "mongoose";
const { Schema } = mongoose;
const GenreSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        validate : {
            validator: async function(value) {
                const genreCount = await mongoose.models.Genre.countDocuments({name: value });
                return !genreCount;
            },
            message: 'The [{VALUE}] is already existed in genres'
        }
    },
    slug:{
        type:String,
    },
    sourceId:[{ type: Schema.Types.ObjectId, ref: 'Source' }],
},{
    timestamps:true,
});

const Genre= mongoose.model('Genre', GenreSchema);
export default Genre;
