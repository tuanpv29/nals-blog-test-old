import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss',
})
export class BlogListComponent {
  public blogs = MOCK;
}

const MOCK = [
  {
    id: 950,
    title: 'new titl',
    content: 'new content',
    comments_count: 0,
    image: {
      url: 'https://mock-api.nals.vn/images/fallback/default.png',
    },
    created_at: '2024-03-18T03:05:19.543Z',
    updated_at: '2024-03-18T03:05:40.118Z',
  },
  {
    id: 949,
    title: '1914 translation by H. Rackham',
    content:
      'On the other hand, we denounce with righteous indignation and disldeedfsdf',
    comments_count: 0,
    image: {
      url: 'https://res.cloudinary.com/sontd-nal-vn/image/upload/v1710506783/ye66qvvmebignj9tpkyn.jpg',
    },
    created_at: '2024-03-15T08:59:38.160Z',
    updated_at: '2024-03-15T12:46:23.190Z',
  },
  {
    id: 948,
    title: 'My Blog s3s ',
    content: 'My Blog Content',
    comments_count: 0,
    image: {
      url: 'https://res.cloudinary.com/sontd-nal-vn/image/upload/v1710504045/jzev5zaa8iibgpegouvc.jpg',
    },
    created_at: '2024-03-15T08:57:24.725Z',
    updated_at: '2024-03-15T12:00:44.855Z',
  },
  {
    id: 947,
    title: 'Hello this is my second post',
    content: 'Hello this is my second post',
    comments_count: 0,
    image: {
      url: 'https://mock-api.nals.vn/images/fallback/default.png',
    },
    created_at: '2024-03-15T08:52:06.105Z',
    updated_at: '2024-03-15T08:52:06.105Z',
  },
  {
    id: 946,
    title: 'Hello this is my first post',
    content: 'Hello this is my first post',
    comments_count: 0,
    image: {
      url: 'https://mock-api.nals.vn/images/fallback/default.png',
    },
    created_at: '2024-03-15T08:51:19.115Z',
    updated_at: '2024-03-15T08:51:19.115Z',
  },
  {
    id: 945,
    title: 'My Blog',
    content: 'My Blog Content',
    comments_count: 0,
    image: {
      url: 'https://mock-api.nals.vn/images/fallback/default.png',
    },
    created_at: '2024-03-15T08:49:40.520Z',
    updated_at: '2024-03-15T08:49:40.520Z',
  },
  {
    id: 944,
    title: 'How we use it?',
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    comments_count: 0,
    image: {
      url: 'https://res.cloudinary.com/sontd-nal-vn/image/upload/v1710491531/nxdql1jdzu8uufw5jfzu.jpg',
    },
    created_at: '2024-03-15T08:32:10.969Z',
    updated_at: '2024-03-15T08:32:10.969Z',
  },
  {
    id: 943,
    title: 'How we use it?',
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    comments_count: 0,
    image: {
      url: 'https://res.cloudinary.com/sontd-nal-vn/image/upload/v1710489549/ktnob7obr2acg9wvrajb.jpg',
    },
    created_at: '2024-03-15T07:59:09.450Z',
    updated_at: '2024-03-15T07:59:09.450Z',
  },
  {
    id: 942,
    title: 'Why do we use it?',
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    comments_count: 0,
    image: {
      url: 'https://res.cloudinary.com/sontd-nal-vn/image/upload/v1710489385/iwg1mfhm5tp26gzegbx0.jpg',
    },
    created_at: '2024-03-15T07:56:25.820Z',
    updated_at: '2024-03-15T07:56:25.820Z',
  },
];
