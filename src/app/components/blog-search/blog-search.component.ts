import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-blog-search',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './blog-search.component.html',
  styleUrl: './blog-search.component.scss',
})
export class BlogSearchComponent implements OnInit {
  searchControl = new FormControl<string>('', { nonNullable: true });

  constructor() {}

  ngOnInit(): void {
    this.observeValueChange();
  }

  private observeValueChange(): void {
    this.searchControl.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe(value => {
        console.log('search:', value);
      });
  }
}
