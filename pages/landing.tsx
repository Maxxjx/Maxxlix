import { useRouter } from 'next/router';
import { FaPlay, FaInfoCircle, FaSearch, FaRandom, FaHeart } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Landing = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-red-900/30 to-black">
          <div className="absolute inset-0 bg-[url('/images/anime-hero.jpg')] bg-cover bg-center opacity-40"></div>
        </div>
        
        {/* Navigation */}
        <nav className="relative z-20 px-6 py-4">
          <div className="container mx-auto flex items-center justify-between">
            <img src="/images/logo.png" alt="Logo" className="h-12" />
            <button
              onClick={() => router.push('/auth')}
              className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
            >
              Sign In
            </button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className={`relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center mb-6 leading-tight">
            Your Ultimate Anime <br />
            <span className="text-red-500">Streaming Paradise</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 text-center mb-8 max-w-2xl">
            Stream thousands of anime series and movies, from classics to the latest releases. 
            New episodes added weekly!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => router.push('/auth')}
              className="px-8 py-4 bg-red-600 text-white rounded-md font-semibold text-lg hover:bg-red-700 transition duration-300 flex items-center justify-center group"
            >
              <FaPlay className="mr-2 group-hover:animate-pulse" />
              Start Watching Now
            </button>
            
            <button
              onClick={() => router.push('/about')}
              className="px-8 py-4 bg-gray-800/80 text-white rounded-md font-semibold text-lg hover:bg-gray-700 transition duration-300 flex items-center justify-center"
            >
              <FaInfoCircle className="mr-2" />
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative bg-black py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/50 transition duration-300">
              <FaSearch className="text-red-500 text-4xl mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Vast Collection</h3>
              <p className="text-gray-400">Access thousands of anime titles, from shounen to slice of life.</p>
            </div>
            
            <div className="p-6 rounded-lg bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/50 transition duration-300">
              <FaRandom className="text-red-500 text-4xl mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">New Releases</h3>
              <p className="text-gray-400">Stay up to date with simulcast releases and latest episodes.</p>
            </div>
            
            <div className="p-6 rounded-lg bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/50 transition duration-300">
              <FaHeart className="text-red-500 text-4xl mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Personalized</h3>
              <p className="text-gray-400">Get recommendations based on your watching history.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Anime Section */}
      <div className="relative bg-gradient-to-b from-black to-gray-900 py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
            Popular Right Now
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative group cursor-pointer">
                <div className="aspect-w-2 aspect-h-3 rounded-lg overflow-hidden">
                  <img 
                    src={`/images/anime-${i}.jpg`} 
                    alt={`Popular Anime ${i}`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-medium">Popular Anime Title {i}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-gradient-to-b from-gray-900 to-black py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Start Your Anime Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our community of anime lovers today.
          </p>
          <button
            onClick={() => router.push('/auth')}
            className="px-8 py-4 bg-red-600 text-white rounded-md font-semibold text-lg hover:bg-red-700 transition duration-300 inline-flex items-center"
          >
            <FaPlay className="mr-2" />
            Get Started
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center text-gray-400">
          <p>© 2025 AnimeStream. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;