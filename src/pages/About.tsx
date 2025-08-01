import React from 'react';
import { Mail, Instagram, Twitter, Youtube } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">About The Canvas</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Where creativity meets culture. We explore the intersection of art, music, and design 
          in contemporary society.
        </p>
      </div>

      {/* Mission Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-gray-300 leading-relaxed mb-6">
            The Canvas was born from a simple belief: that creativity is the driving force behind 
            human progress and cultural evolution. In a world increasingly dominated by technology 
            and data, we champion the importance of artistic expression, creative thinking, and 
            cultural dialogue.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            Our mission is to bridge the gap between different creative disciplines, showcasing 
            how art, music, and design influence each other and shape our collective experience. 
            We believe that by understanding these connections, we can better appreciate the 
            creative process and its impact on society.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Through thoughtful articles, in-depth interviews, and our podcast "The Creative Pulse," 
            we aim to inspire, educate, and connect creative minds from around the world.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=256&h=256&fit=crop" 
                alt="Sarah Chen"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Sarah Chen</h3>
            <p className="text-red-400 mb-3">Editor-in-Chief</p>
            <p className="text-gray-400 text-sm">
              Photography enthusiast and visual storyteller with 10+ years in arts journalism.
            </p>
          </div>

          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=256&h=256&fit=crop" 
                alt="Marcus Rodriguez"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Marcus Rodriguez</h3>
            <p className="text-red-400 mb-3">Art Critic</p>
            <p className="text-gray-400 text-sm">
              Contemporary art specialist focusing on urban art and public installations.
            </p>
          </div>

          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=256&h=256&fit=crop" 
                alt="Elena Vasquez"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Elena Vasquez</h3>
            <p className="text-red-400 mb-3">Design Writer</p>
            <p className="text-gray-400 text-sm">
              Interior designer turned writer, exploring the psychology of space and color.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-red-400">Authenticity</h3>
            <p className="text-gray-300">
              We believe in honest, thoughtful criticism and genuine appreciation for creative work. 
              Our reviews and articles reflect our true perspectives, not trends or commercial interests.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-red-400">Diversity</h3>
            <p className="text-gray-300">
              Creativity knows no boundaries. We actively seek out and celebrate voices from all 
              backgrounds, cultures, and artistic traditions.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-red-400">Education</h3>
            <p className="text-gray-300">
              We strive to make art, music, and design accessible to everyone, regardless of their 
              background or level of expertise.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-red-400">Innovation</h3>
            <p className="text-gray-300">
              We're always exploring new ways to present content and engage with our audience, 
              from interactive features to multimedia storytelling.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-center bg-gray-800 rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Have a story idea, want to collaborate, or just want to say hello? 
          We'd love to hear from you.
        </p>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="mailto:hello@thecanvas.blog" className="text-gray-400 hover:text-white transition-colors">
            <Mail className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Youtube className="w-6 h-6" />
          </a>
        </div>
        <a 
          href="mailto:hello@thecanvas.blog"
          className="inline-block bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg transition-colors font-medium"
        >
          Send us an Email
        </a>
      </div>
    </div>
  );
};

export default About;