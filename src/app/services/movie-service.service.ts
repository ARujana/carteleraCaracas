import { MovieListResponse } from 'src/app/models/MovieListResponse';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  apiKey = '9472741abb75c4bf283a14eea85db98f';
  movieList: MovieListResponse;

  constructor(private clientH: HttpClient) {}
  
  getMovies() {
    this.clientH.get<MovieListResponse>('https://api.themoviedb.org/3/discover/movie?api_key='+this.apiKey+'&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1').subscribe(
      result => this.movieList = result);
  }
}
