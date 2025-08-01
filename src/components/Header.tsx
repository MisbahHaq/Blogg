import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { categories } from '../data/categories';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="bg-black px-4 sm:px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide hover:text-white transition-colors">
            THE CANVAS BLOG.
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <Link
            to="/"
            className={`text-sm transition-colors ${isActive('/') ? 'text-red-400' : 'text-white hover:text-gray-300'
              }`}
          >
            Latest
          </Link>
          <Link
            to="/category/trending"
            className={`text-sm transition-colors ${isActive('/category/trending') ? 'text-red-400' : 'text-white hover:text-gray-300'
              }`}
          >
            Trending
          </Link>
          <Link
            to="/category/art"
            className={`text-sm transition-colors ${isActive('/category/art') ? 'text-red-400' : 'text-white hover:text-gray-300'
              }`}
          >
            Art
          </Link>
          <Link
            to="/category/design"
            className={`text-sm transition-colors ${isActive('/category/design') ? 'text-red-400' : 'text-white hover:text-gray-300'
              }`}
          >
            Design
          </Link>
          <Link
            to="/category/music"
            className={`text-sm transition-colors ${isActive('/category/music') ? 'text-red-400' : 'text-white hover:text-gray-300'
              }`}
          >
            Music
          </Link>
          <Link
            to="/podcast"
            className={`text-sm transition-colors ${isActive('/podcast') ? 'text-red-400' : 'text-white hover:text-gray-300'
              }`}
          >
            Podcast
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white hover:text-gray-300 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-gray-700">
          <nav className="flex flex-col space-y-3 pt-4">
            <Link
              to="/"
              className={`text-sm transition-colors ${isActive('/') ? 'text-red-400' : 'text-white hover:text-gray-300'
                }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Latest
            </Link>
            <Link
              to="/category/trending"
              className={`text-sm transition-colors ${isActive('/category/trending') ? 'text-red-400' : 'text-white hover:text-gray-300'
                }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Trending
            </Link>
            <Link
              to="/category/art"
              className={`text-sm transition-colors ${isActive('/category/art') ? 'text-red-400' : 'text-white hover:text-gray-300'
                }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Art
            </Link>
            <Link
              to="/category/design"
              className={`text-sm transition-colors ${isActive('/category/design') ? 'text-red-400' : 'text-white hover:text-gray-300'
                }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Design
            </Link>
            <Link
              to="/category/music"
              className={`text-sm transition-colors ${isActive('/category/music') ? 'text-red-400' : 'text-white hover:text-gray-300'
                }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Music
            </Link>
            <Link
              to="/podcast"
              className={`text-sm transition-colors ${isActive('/podcast') ? 'text-red-400' : 'text-white hover:text-gray-300'
                }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Podcast
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;