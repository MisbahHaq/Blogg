import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import BlogCard from '../components/BlogCard';
import { blogPosts } from '../data/blogPosts';
import { categories } from '../data/categories';

const Category: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = categories.find(c => c.slug === slug);
  
  let filteredPosts = blogPosts;
  
  if (slug === 'trending') {
    // For trending, show posts sorted by a mock popularity score
    filteredPosts = [...blogPosts].sort(() => Math.random() - 0.5).slice(0, 6);
  } else if (category && category.slug !== 'latest') {
    filteredPosts = blogPosts.filter(post => 
      post.category.toLowerCase() === category.name.toLowerCase()
    );
  }

  const categoryName = category?.name || 'Category';
  const categoryDescription = category?.description || 'Explore our latest posts';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Back Button */}
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>

      {/* Category Header */}
      <div className="mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">{categoryName}</h1>
        <p className="text-gray-400 text-lg max-w-2xl">{categoryDescription}</p>
      </div>

      {/* Posts Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4">No posts found</h2>
          <p className="text-gray-400 mb-8">
            There are no posts in this category yet. Check back soon!
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      )}
    </div>
  );
};

export default Category;