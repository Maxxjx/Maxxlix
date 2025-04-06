import { useRouter } from 'next/router';
import { FaPlay, FaGlobe, FaTablet, FaCommentAlt } from 'react-icons/fa';

const About = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black">
      <nav className="relative z-20 px-6 py-4 bg-black/80">
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
      
      <div className="relative">
        <div className="absolute inset-0 bg-[url('/images/anime-about.jpg')] bg-cover bg-center opacity-20"></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8">
              About <span className="text-red-500">AnimeStream</span>
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="p-6 rounded-lg bg-gray-900/50 backdrop-blur-sm">
                <FaGlobe className="text-red-500 text-4xl mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-white mb-3">Global Content</h3>
                <p className="text-gray-300">
                  Access anime from Japan and around the world, with subtitles and dubbing in multiple languages.
                </p>
              </div>
              
              <div className="p-6 rounded-lg bg-gray-900/50 backdrop-blur-sm">
                <FaTablet className="text-red-500 text-4xl mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-white mb-3">Watch Anywhere</h3>
                <p className="text-gray-300">
                  Stream on any device, from smartphones to smart TVs, with seamless sync across all platforms.
                </p>
              </div>
            </div>
            
            <div className="space-y-6 text-lg text-gray-300 mb-12">
              <p>
                AnimeStream is your premium destination for the best anime content.
                From classic series to the latest seasonal releases, we bring you
                the highest quality streaming experience for anime lovers.
              </p>
              
              <p>
                Our curated collection includes shounen, slice of life, isekai,
                romance, and much more. With new episodes added weekly and exclusive
                simulcast releases, you'll never miss out on the latest anime content.
              </p>
              
              <div className="mt-8 p-6 rounded-lg bg-gray-900/50 backdrop-blur-sm">
                <FaCommentAlt className="text-red-500 text-4xl mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-white mb-3">Join Our Community</h3>
                <p className="text-gray-300">
                  Connect with millions of anime fans, share your favorite series,
                  and participate in discussions about the latest episodes.
                </p>
              </div>
            </div>
            
            <button
              onClick={() => router.push('/auth')}
              className="px-8 py-4 bg-red-600 text-white rounded-md font-semibold text-lg hover:bg-red-700 transition duration-300 inline-flex items-center"
            >
              <FaPlay className="mr-2" />
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
      
      <footer className="bg-black py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center text-gray-400">
          <p>© 2025 AnimeStream. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;