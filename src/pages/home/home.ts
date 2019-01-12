import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyApiProvider } from './../../providers/my-api/my-api';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  movies: Observable<any>;

  constructor(public navCtrl: NavController, public apiProvider: MyApiProvider) {
    this.movies = this.apiProvider.getMovies();
  }

  getDetails(movie) {
    this.navCtrl.push('MovieDetailsPage', {movie: movie});
  }



}
