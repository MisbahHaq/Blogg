export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  category: string;
  tags: string[];
  imageUrl: string;
  readTime: number;
  featured?: boolean;
}

export interface PodcastEpisode {
  id: string;
  title: string;
  duration: string;
  description: string;
  audioUrl: string;
  publishedAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string;
}