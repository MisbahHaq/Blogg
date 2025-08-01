import React, { useState } from 'react';
import { Play, Pause, Download, Share2 } from 'lucide-react';
import { podcastEpisodes } from '../data/podcastEpisodes';

const Podcast: React.FC = () => {
  const [currentEpisode, setCurrentEpisode] = useState<string>();

  const handlePlayEpisode = (episodeId: string) => {
    setCurrentEpisode(currentEpisode === episodeId ? undefined : episodeId);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Podcast Header */}
      <div className="text-center mb-12">
        <div className="w-48 h-48 mx-auto mb-8 rounded-lg overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=384&h=384&fit=crop" 
            alt="The Creative Pulse Podcast" 
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">The Creative Pulse</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
          Conversations with artists, designers, and creative minds shaping contemporary culture. 
          Dive deep into the creative process and discover what drives innovation in art, music, and design.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition-colors flex items-center gap-2">
            <Play className="w-4 h-4" />
            Subscribe
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            Download
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center gap-2">
            <Share2 className="w-4 h-4" />
            Share
          </button>
        </div>
      </div>

      {/* Episodes List */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-6">Latest Episodes</h2>
        {podcastEpisodes.map((episode, index) => (
          <div key={episode.id} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gray-700 rounded-lg flex items-center justify-center">
                  <button
                    onClick={() => handlePlayEpisode(episode.id)}
                    className="text-white hover:text-red-400 transition-colors"
                  >
                    {currentEpisode === episode.id ? (
                      <Pause className="w-8 h-8" />
                    ) : (
                      <Play className="w-8 h-8" />
                    )}
                  </button>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <h3 className="text-xl font-bold">
                    Episode {String(index + 1).padStart(2, '0')}: {episode.title.replace('...', '')}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>{episode.duration}</span>
                    <span>{formatDate(episode.publishedAt)}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {episode.description}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => handlePlayEpisode(episode.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 text-sm"
                  >
                    {currentEpisode === episode.id ? (
                      <>
                        <Pause className="w-3 h-3" />
                        Pause
                      </>
                    ) : (
                      <>
                        <Play className="w-3 h-3" />
                        Play
                      </>
                    )}
                  </button>
                  <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 text-sm">
                    <Download className="w-3 h-3" />
                    Download
                  </button>
                  <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 text-sm">
                    <Share2 className="w-3 h-3" />
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Subscription CTA */}
      <div className="mt-16 bg-gradient-to-r from-red-500 to-red-600 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Never Miss an Episode</h3>
        <p className="text-red-100 mb-6 max-w-2xl mx-auto">
          Subscribe to The Creative Pulse and get notified when new episodes are released. 
          Join our community of creative minds and stay inspired.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-white text-red-600 hover:bg-gray-100 px-6 py-3 rounded-lg transition-colors font-medium">
            Apple Podcasts
          </button>
          <button className="bg-white text-red-600 hover:bg-gray-100 px-6 py-3 rounded-lg transition-colors font-medium">
            Spotify
          </button>
          <button className="bg-white text-red-600 hover:bg-gray-100 px-6 py-3 rounded-lg transition-colors font-medium">
            Google Podcasts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Podcast;