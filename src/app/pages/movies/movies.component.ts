import { Component, OnInit } from '@angular/core';

interface Movie {
  title : string;
  poster: string;
  description: string;
}

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [
    {
      title: 'Inception',
      poster: 'https://m.media-amazon.com/images/M/MV5BMj00MjU3NjYxNjYtY2U5OS00YzNkLWE3NTctYTMxNzM3ODc3MzA3XkEyXkFqcGdeQXVyND8wMzE1MjY@._V1_UX182_CR0,0,182,268_AL_.jpg',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the opportunity to reject his former life and start over.'
    },
    {
      title: 'The Matrix',
      poster: 'https://m.media-amazon.com/images/M/MV5BMTMxNTczODc0NF5BMl5BanBnXkFtZTcwMjA4NTIyMw@._V1_UX182_CR0,0,182,268_AL_.jpg',
      description: 'In a world where reality is constantly being altered by artificial intelligence, a renowned hacker and genius named Neo (Travis McCoy) must find a way to save his friends from a deadly virus.'
    }
  ];

  ngOnInit(): void {}

}
