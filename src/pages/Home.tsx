import React, { useState } from 'react';
import { Play, MoreHorizontal } from 'lucide-react';
import BlogCard from '../components/BlogCard';
import PodcastPlayer from '../components/PodcastPlayer';
import { blogPosts } from '../data/blogPosts';
import { podcastEpisodes } from '../data/podcastEpisodes';

const Home: React.FC = () => {
  const [currentEpisode, setCurrentEpisode] = useState<string>();

  const featuredPost = blogPosts.find(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured).slice(0, 6);

  const handlePlayEpisode = (episodeId: string) => {
    setCurrentEpisode(currentEpisode === episodeId ? undefined : episodeId);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
      {/* Hero Section with Logo */}
      <div className="mb-8 sm:mb-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">THE CANVAS</h1>
          <div className="flex items-center gap-4 sm:gap-8">
            <div className="text-right hidden sm:block">
              <div className="text-gray-400 text-sm">Blog about</div>
              <div className="text-gray-400 text-sm">art,</div>
              <div className="text-gray-400 text-sm">music,</div>
              <div className="text-gray-400 text-sm">design.</div>
            </div>
            <div className="flex space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer">
                <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer">
                <MoreHorizontal className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Featured Article */}
        {featuredPost && (
          <BlogCard post={featuredPost} featured={true} />
        )}
      </div>

      {/* Recent Posts */}
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Recent Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Podcast Section */}
        <div className="lg:col-span-2">
          <PodcastPlayer 
            episodes={podcastEpisodes}
            currentEpisode={currentEpisode}
            onPlay={handlePlayEpisode}
          />
        </div>

        {/* Podcast CTA */}
        <div className="lg:col-span-1">
          <div className="bg-gray-100 rounded-lg p-6 sm:p-8 text-center h-full flex flex-col justify-center">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-6 sm:mb-8 leading-tight">
              Have You<br />
              Heard Our<br />
              Podcast Yet?
            </h3>
            <button className="bg-red-500 hover:bg-red-600 transition-all duration-300 transform hover:scale-105 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base">
              Listen Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;