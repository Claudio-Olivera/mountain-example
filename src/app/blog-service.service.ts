import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

  apiBlog = 'http://localhost:8000/api/blog/';

  constructor(private http:HttpClient) { }

  getBlogs(){
    return this.http.get(this.apiBlog);
  }
  
  deleteBlog(id: number) {
    const headers = new HttpHeaders({
      'Authorization': `Token ${localStorage.getItem('token')}`
    });
    return this.http.delete(`${this.apiBlog}${id}/`, { headers });
  }
}
