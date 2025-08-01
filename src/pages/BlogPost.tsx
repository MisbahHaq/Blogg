import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, User, Calendar, Tag } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
        <p className="text-gray-400 mb-8">The blog post you're looking for doesn't exist.</p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Back Button */}
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>

      {/* Article Header */}
      <header className="mb-8">
        <div className="text-red-400 text-sm uppercase tracking-wide mb-4">
          {post.category}
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          {post.title}
        </h1>
        
        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-8">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(post.publishedAt)}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{post.readTime} min read</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="aspect-video rounded-lg overflow-hidden mb-8">
          <img 
            src={post.imageUrl} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </header>

      {/* Article Content */}
      <div className="prose prose-lg prose-invert max-w-none">
        {post.content.split('\n\n').map((paragraph, index) => (
          <p key={index} className="mb-6 text-gray-300 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Tags */}
      <div className="mt-12 pt-8 border-t border-gray-800">
        <div className="flex items-center gap-2 mb-4">
          <Tag className="w-4 h-4 text-gray-400" />
          <span className="text-gray-400 text-sm">Tags:</span>
        </div>
        <div className="flex flex-wrap gap-3">
          {post.tags.map((tag) => (
            <span 
              key={tag} 
              className="bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded-full text-sm transition-colors cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Related Posts */}
      <div className="mt-16 pt-8 border-t border-gray-800">
        <h3 className="text-2xl font-bold mb-6">More from {post.category}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts
            .filter(p => p.category === post.category && p.id !== post.id)
            .slice(0, 2)
            .map((relatedPost) => (
              <Link 
                key={relatedPost.id}
                to={`/post/${relatedPost.id}`}
                className="group"
              >
                <div className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-colors">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={relatedPost.imageUrl} 
                      alt={relatedPost.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold mb-2 group-hover:text-gray-300 transition-colors">
                      {relatedPost.title}
                    </h4>
                    <p className="text-gray-400 text-sm line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </article>
  );
};

export default BlogPost;