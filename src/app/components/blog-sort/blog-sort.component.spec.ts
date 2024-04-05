import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSortComponent } from './blog-sort.component';

describe('BlogSortComponent', () => {
  let component: BlogSortComponent;
  let fixture: ComponentFixture<BlogSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogSortComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BlogSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
