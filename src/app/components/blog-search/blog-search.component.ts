import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './blog-search.component.html',
  styleUrl: './blog-search.component.scss',
})
export class BlogSearchComponent {}
