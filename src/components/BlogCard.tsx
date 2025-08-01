import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User } from 'lucide-react';
import { BlogPost } from '../types/blog';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, featured = false }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  if (featured) {
    return (
      <div className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-colors">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 p-6 sm:p-8">
            <div className="text-gray-400 text-xs sm:text-sm mb-2 uppercase tracking-wide">
              {post.category}
            </div>
            <Link to={`/post/${post.id}`}>
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 hover:text-gray-300 transition-colors cursor-pointer">
                {post.title}
              </h2>
            </Link>
            <div className="flex items-center gap-4 text-gray-400 text-xs sm:text-sm mb-4">
              <div className="flex items-center gap-1">
                <User className="w-3 h-3" />
                {post.author}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readTime} min read
              </div>
              <span>{formatDate(post.publishedAt)}</span>
            </div>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 max-w-none lg:max-w-md">
              {post.excerpt}
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {post.tags.map((tag) => (
                <span key={tag} className="bg-gray-700 px-2 sm:px-3 py-1 rounded-full text-xs hover:bg-gray-600 transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-80 h-48 sm:h-64">
            <Link to={`/post/${post.id}`}>
              <img 
                src={post.imageUrl} 
                alt={post.title} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <article className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-all duration-300 group">
      <Link to={`/post/${post.id}`}>
        <div className="aspect-video overflow-hidden">
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
          />
        </div>
      </Link>
      <div className="p-6">
        <div className="text-gray-400 text-xs uppercase tracking-wide mb-2">
          {post.category}
        </div>
        <Link to={`/post/${post.id}`}>
          <h3 className="text-xl font-bold mb-3 group-hover:text-gray-300 transition-colors">
            {post.title}
          </h3>
        </Link>
        <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <User className="w-3 h-3" />
              {post.author}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime} min
            </div>
          </div>
          <span>{formatDate(post.publishedAt)}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="bg-gray-700 px-2 py-1 rounded-full text-xs hover:bg-gray-600 transition-colors">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default BlogCard;