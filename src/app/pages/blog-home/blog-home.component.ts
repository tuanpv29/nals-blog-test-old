import { Component } from '@angular/core';
import { BlogSearchComponent } from '../../components/blog-search/blog-search.component';
import { BlogSortComponent } from '../../components/blog-sort/blog-sort.component';
import { BlogListComponent } from '../../components/blog-list/blog-list.component';
import { RouterLink } from '@angular/router';
import { BlogPaginationComponent } from '../../components/blog-pagination/blog-pagination.component';

@Component({
  selector: 'app-blog-home',
  standalone: true,
  imports: [
    BlogSearchComponent,
    BlogSortComponent,
    BlogListComponent,
    BlogPaginationComponent,
    RouterLink,
  ],
  templateUrl: './blog-home.component.html',
  styleUrl: './blog-home.component.scss',
})
export class BlogHomeComponent {}
