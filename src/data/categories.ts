import { Category } from '../types/blog';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Latest',
    slug: 'latest',
    description: 'The most recent posts across all categories',
    color: 'text-white'
  },
  {
    id: '2',
    name: 'Trending',
    slug: 'trending',
    description: 'Popular posts that are gaining traction',
    color: 'text-white'
  },
  {
    id: '3',
    name: 'Art',
    slug: 'art',
    description: 'Contemporary art, exhibitions, and artistic movements',
    color: 'text-blue-400'
  },
  {
    id: '4',
    name: 'Design',
    slug: 'design',
    description: 'Visual design, UX/UI, and creative processes',
    color: 'text-green-400'
  },
  {
    id: '5',
    name: 'Music',
    slug: 'music',
    description: 'Music culture, industry insights, and sound exploration',
    color: 'text-purple-400'
  },
  {
    id: '6',
    name: 'Photography',
    slug: 'photography',
    description: 'Photography techniques, equipment, and visual storytelling',
    color: 'text-yellow-400'
  }
];