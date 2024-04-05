import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-blog-view',
  standalone: true,
  imports: [RouterLink, NgbDropdownModule],
  templateUrl: './blog-view.component.html',
  styleUrl: './blog-view.component.scss',
})
export class BlogViewComponent {
  constructor(private router: Router) {}

  public onUpdateClicked(id: number): void {
    console.log('update');
    this.router.navigate(['/edit', id]);
  }

  public onDeleteClicked(id: number): void {
    console.log('delete', id);
  }
}
