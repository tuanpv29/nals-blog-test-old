import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { Blog } from '../../models/blog.model';
import { BlogService } from '../../services/blog.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-blog-view',
  standalone: true,
  imports: [RouterLink, NgbDropdownModule, DatePipe],
  templateUrl: './blog-view.component.html',
  styleUrl: './blog-view.component.scss',
})
export class BlogViewComponent implements OnInit {
  blog!: Blog;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private blogService: BlogService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.params['id']);
    this.blogService.getBlogById(id).subscribe(blog => {
      if (blog) {
        this.blog = blog;
      }
    });
  }

  onUpdateClicked(id: number): void {
    this.router.navigate(['/edit', id]);
  }

  onDeleteClicked(id: number): void {
    console.log('delete', id);
    this.blogService.deleteBlogById(id).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: () => {
        console.log('something went wrong');
      },
    });
  }
}
