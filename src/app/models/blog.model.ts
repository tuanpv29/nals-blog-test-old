import { Pagination } from './pagination.model';

export interface BlogStateModel {
  blogs: Blog[];
}

export interface BlogApiResponse {
  data: {
    items: Blog[];
  };
  pagination: Pagination;
}

export interface Blog {
  id: number;
  title: string;
  content: string;
  comments_count: number;
  image: {
    url: string;
  };
  created_at: string;
  updated_at: string;
}
