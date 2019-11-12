import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// httpHeaders permet d'envoyer des entete http

@Injectable({
  providedIn: 'root'
})
export class ArticlesOnlineService {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:5000/api/articles';

  create(credentials) {
    const token = localStorage.getItem('token');

    const options = {
      headers: new HttpHeaders({
        'X-auth': token
      })
    };
    return this.http.post(this.url, credentials, options);
  }
}
