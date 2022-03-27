import genreModel from '../models/genre.model.js';
import Genre from '../entities/genre.entity.js';
import errorMessage from '../helpers/error.message.helper.js';
function getAllGenre() {
    try {
      return genreModel.getAllGenre();
    }
    catch (err) {
      return errorMessage(err);
    }
};
async function save(name) {
    try {
      let newGenre = new Genre({
        "name": name,
      });
      let err = newGenre.validateSync();
      if (err) return errorMessage(err);
      await genreModel.save(newGenre);
      return { Message: 'New genre added' };
    }
    catch (err) {
      return errorMessage(err);
    }
  };

export default {
    getAllGenre,
    save
  };