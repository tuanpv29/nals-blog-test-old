import { Component } from '@angular/core';
import { BlogFormComponent } from '../../components/blog-form/blog-form.component';

@Component({
  selector: 'app-blog-edit',
  standalone: true,
  imports: [BlogFormComponent],
  templateUrl: './blog-edit.component.html',
  styleUrl: './blog-edit.component.scss',
})
export class BlogEditComponent {}
