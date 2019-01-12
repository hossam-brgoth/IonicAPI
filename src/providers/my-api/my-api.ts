import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MyApiProvider {

  constructor(public http: HttpClient) {
  }

  getMovies() {
    return this.http.get('https://swapi.co/api/films');
  }

}