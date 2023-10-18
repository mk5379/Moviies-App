import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { HttpClient } from '@angular/common/http';

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
  ngOnInit() {
    this.movieId = this.activatedRoute.snapshot.params['id'];
    
  }

}
