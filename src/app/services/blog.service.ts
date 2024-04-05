import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Blog, BlogApiResponse } from '../models/blog.model';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private url = `${environment.url}/blogs/fake`;

  constructor(private http: HttpClient) {}

  getBlogs(): Observable<BlogApiResponse> {
    // return this.http.get<BlogApiResponse>(`this.url`);
    return this.http.get<BlogApiResponse>(`/assets/db.json`);
  }

  getBlogById(id: number): Observable<Blog | undefined> {
    return this.http.get<BlogApiResponse>(`/assets/db.json`).pipe(
      map(db => {
        const items = db.data.items;
        return items.find(item => item.id === id);
      })
    );
  }

  deleteBlogById(id: number): Observable<unknown> {
    return this.http.get<BlogApiResponse>(`${this.url}/${id}`);
  }
}
