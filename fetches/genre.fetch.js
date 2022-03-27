import request from '../utils/rpClient.js';
import Genre from '../entities/genre.entity.js';
import genreModel from '../models/genre.model.js';

// /**
//  * Fetching Genre (OPTIMIZING)
//  * @returns Genres[]
//  */
// async function getAllGenres(){
//     let updatedGenres = [];
//     let genresFormDB = await genreModel.getAllGenre();
//     let result = await request.get('http://localhost:1337/genre');
//     let genres = JSON.parse(result.body);
//     genres = await Promise.all(
//         genres.genres.map( async (genreName) => {
//             try{
//                 await genreModel.save(new Genre({"name": genreName}));
//                 return genreName;
//             }
//             catch (err){
//                 return null;
//             }
//     }))
//     return {updated: genres.filter((e)=>e)}
// }
async function getAllGenres(){
    let updatedGenres = [];
    let response = await request.get('http://localhost:1337/genre');
    let { genres } = JSON.parse(response.body);
    let genresFromDB = await genreModel.getAllGenre();

    let genresDict = Object.fromEntries(new Map(genresFromDB.map(genre => [genre.name,true])));

    genres.forEach(async (genre) =>{
        if (!genresDict[genre]) {
            updatedGenres.push(genre);
            try{
                await genreModel.save(new Genre({"name": genre}));
            }
            catch (err){
                return err;
            }
        }
    })
    return updatedGenres;
}
export default {
    getAllGenres,
  };