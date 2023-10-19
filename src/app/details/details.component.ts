import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private Api: ApiService
  ) { }
  
  movieId: String = '';
  casts = [];
  movies : any = {};


  ngOnInit() {
    this.movieId = this.activatedRoute.snapshot.params['id'];

    this.Api.getCasts(this.movieId).subscribe({
      next : (data : any) => {
        console.log(data),
        this.casts = data['cast']
      },
      error: (err:HttpErrorResponse) => {
        console.log(err)
      }
    })

    this.Api.getMovieDetail(this.movieId).subscribe({
      next : (data : any) => {
        console.log(data),
        this.movies = data
      },
      error: (err : HttpErrorResponse) => {
        console.log(err)
      }
    })
  }

}
