import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Blog, BlogStateModel } from '../models/blog.model';
import { BlogAction } from './blog.action';
import { BlogService } from '../services/blog.service';
import { tap } from 'rxjs';

@State<BlogStateModel>({
  name: 'blog',
  defaults: {
    blogs: [],
  },
})
@Injectable()
export class BlogState {
  @Selector()
  static blogs(state: BlogStateModel): Blog[] {
    return state.blogs;
  }

  constructor(private blogService: BlogService) {}

  @Action(BlogAction.Get, { cancelUncompleted: true })
  getBlogs(ctx: StateContext<BlogStateModel>) {
    return this.blogService.getBlogs().pipe(
      tap(response => {
        ctx.patchState({
          blogs: response.data.items,
        });
      })
    );
  }
}
