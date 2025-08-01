import React from 'react';
import { Play, Pause } from 'lucide-react';
import { PodcastEpisode } from '../types/blog';

interface PodcastPlayerProps {
  episodes: PodcastEpisode[];
  currentEpisode?: string;
  onPlay: (episodeId: string) => void;
}

const PodcastPlayer: React.FC<PodcastPlayerProps> = ({ episodes, currentEpisode, onPlay }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-700 rounded-lg overflow-hidden flex-shrink-0 mx-auto sm:mx-0">
          <img 
            src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=256&h=256&fit=crop" 
            alt="Podcast host" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-400 text-center sm:text-left">
            The Creative Pulse
          </h3>
          <div className="space-y-2 sm:space-y-3">
            {episodes.map((episode, index) => (
              <div 
                key={episode.id}
                className="flex items-center justify-between text-xs sm:text-sm hover:bg-gray-700 p-2 rounded transition-colors cursor-pointer group"
                onClick={() => onPlay(episode.id)}
              >
                <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
                  <span className="text-gray-500">#{String(index + 1).padStart(2, '0')}</span>
                  <span className="truncate group-hover:text-white transition-colors">
                    {episode.title}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  {currentEpisode === episode.id ? (
                    <Pause className="w-3 h-3 sm:w-4 sm:h-4 text-red-400" />
                  ) : (
                    <Play className="w-3 h-3 sm:w-4 sm:h-4 hover:text-red-400 transition-colors" />
                  )}
                  <span className="text-gray-400">{episode.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastPlayer;