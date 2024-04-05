import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Blog } from '../../models/blog.model';
import { Select, Store } from '@ngxs/store';
import { BlogState } from '../../store/blog.state';
import { Observable } from 'rxjs';
import { AsyncPipe, DatePipe, NgOptimizedImage } from '@angular/common';
import { BlogAction } from '../../store/blog.action';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [RouterLink, AsyncPipe, NgOptimizedImage, DatePipe],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss',
})
export class BlogListComponent {
  @Select(BlogState.blogs) blogs$!: Observable<Blog[]>;

  constructor(private store: Store) {
    this.store.dispatch(new BlogAction.Get());
  }
}
