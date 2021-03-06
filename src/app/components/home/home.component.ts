import { MovieService } from './../../services/movie-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  visible = false;

  constructor(public movieService: MovieService) { }

  ngOnInit(): void { 
    this.movieService.getMovies();
  }

  prueba(): void {
  }

}
