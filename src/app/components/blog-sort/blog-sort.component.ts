import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Option {
  label: string;
  value: OptionValue;
}

enum OptionValue {
  CreatedAt = 'created_at',
  UpdatedAt = 'updated_at',
  Title = 'title',
}

@Component({
  selector: 'app-blog-sort',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './blog-sort.component.html',
  styleUrl: './blog-sort.component.scss',
})
export class BlogSortComponent {
  selectedOptionValue = OptionValue.CreatedAt;
  options: Option[] = [
    {
      label: 'Sort by: Date Created',
      value: OptionValue.CreatedAt,
    },
    {
      label: 'Sort by: Date Updated',
      value: OptionValue.UpdatedAt,
    },
    {
      label: 'Sort by: Title',
      value: OptionValue.Title,
    },
  ];

  onSortChange(): void {
    console.log('sort:', this.selectedOptionValue);
  }
}
