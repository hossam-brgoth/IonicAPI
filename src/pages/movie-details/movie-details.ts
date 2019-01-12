import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LikeProvider } from './../../providers/like/like';

@IonicPage()
@Component({
  selector: 'page-movie-details',
  templateUrl: 'movie-details.html',
})
export class MovieDetailsPage {

  movie: any;
  isLiked = false;
 
  constructor(public navCtrl: NavController, public navParams: NavParams, public likeProvider: LikeProvider) {
    this.movie = this.navParams.get('movie');
    this.likeProvider.isLiked(this.movie.episode_id).then(isLK => {
      this.isLiked = isLK;
    })
  }


  likeMovie() {
    this.likeProvider.likeMovie(this.movie.episode_id).then(() => {
      this.isLiked = true;
    });
  }
 
  unlikeMovie() {
    this.likeProvider.unlikeMovie(this.movie.episode_id).then(() => {
      this.isLiked = false;
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MovieDetailsPage');
  }

}