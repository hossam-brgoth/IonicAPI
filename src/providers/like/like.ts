import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
 
const STORAGE_KEY = 'likedMovies';
 
@Injectable()
export class LikeProvider {
 
  constructor(public storage: Storage) { }
 
  isLiked(movieId) {
    return this.getAllLikedMovies().then(result => {
      return result && result.indexOf(movieId) !== -1;
    });
  }
 
  likeMovie(movieId) {
    return this.getAllLikedMovies().then(result => {
      if (result) {
        result.push(movieId);
        return this.storage.set(STORAGE_KEY, result);
      } else {
        return this.storage.set(STORAGE_KEY, [movieId]);
      }
    });
  }
 
  unlikeMovie(movieId) {
    return this.getAllLikedMovies().then(result => {
      if (result) {
        var index = result.indexOf(movieId);
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY, result);
      }
    });
  }
 
  getAllLikedMovies() {
    return this.storage.get(STORAGE_KEY);
  }
 
}