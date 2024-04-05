import { Component } from '@angular/core';
import { BlogFormComponent } from '../../components/blog-form/blog-form.component';

@Component({
  selector: 'app-blog-create',
  standalone: true,
  imports: [BlogFormComponent],
  templateUrl: './blog-create.component.html',
  styleUrl: './blog-create.component.scss',
})
export class BlogCreateComponent {}
