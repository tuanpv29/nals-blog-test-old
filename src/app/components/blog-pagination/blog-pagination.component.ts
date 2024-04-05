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
  page = 4;
  pageSize = 20;
  collectionSize = 100;
}
