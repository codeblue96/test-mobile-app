import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { ApiResult, MovieResult } from './interface'; // Import your interfaces
import { environment } from 'src/environments/environment';

const BASE_URL = 'http://api.themoviedb.org/3';
const API_KEY = environment.apiKey;

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private http = inject(HttpClient);

  getTopRatedMovies(page = 1): Observable<ApiResult> {
    const url = `${BASE_URL}/movie/popular?page=${page}&api_key=${API_KEY}`;
    return this.http.get<ApiResult>(url); // Explicitly specify ApiResult
  }

  getMovieDetails(id: string): Observable<MovieResult> {
    const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;
    return this.http.get<MovieResult>(url); // Specify MovieResult for detailed movie data
  }
}
