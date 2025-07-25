import { Component } from '@angular/core';
import {NgClass, NgStyle} from '@angular/common';
import {StarRatingComponent} from '../../components/star-rating/star-rating.component';
import {TranslatePipe} from '@ngx-translate/core';
import {MovieService} from '../../services/movies.service';

@Component({
  selector: 'app-movie-list',
  imports: [
    NgStyle,
    StarRatingComponent,
    TranslatePipe
  ],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent {
  movies : any[] = [];

  constructor(private movieService: MovieService) {
  }

  callApi(){
    this.movieService.getMovies().subscribe({
      next: (json)=>{
        console.log(json);
        this.movies = json.data;
      },
      error: (error)=>{}
    })
  }
}
