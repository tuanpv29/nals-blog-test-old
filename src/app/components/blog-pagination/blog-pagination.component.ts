import { Component } from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-blog-pagination',
  standalone: true,
  imports: [NgbPaginationModule],
  templateUrl: './blog-pagination.component.html',
  styleUrl: './blog-pagination.component.scss',
})
export class BlogPaginationComponent {
  page = 1;
  pageSize = 10;
  collectionSize = 50;

  constructor() {}

  onPageChange(page: number): void {
    console.log('page:', page);
  }
}
