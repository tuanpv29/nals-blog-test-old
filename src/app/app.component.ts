import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BlogSearchComponent } from './components/blog-search/blog-search.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogSortComponent } from './components/blog-sort/blog-sort.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    BlogSearchComponent,
    BlogListComponent,
    BlogSortComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'nals-blog-test';
}
