import {useState} from 'react';
import {navItems} from '../utils/data';
import {useLocation} from 'react-router-dom';
import {Menu, X, Search} from 'lucide-react';

const TopNavbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isFindJobsActive =
    location.pathname === '/' || location.pathname === '/find-jobs';

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const userProfile = {
    name: 'John Doe',
    images: {
      profile:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    },
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          <div className="flex items-center space-x-6">
            <div className="flex-shrink-0">
              <img
                src="/src/assets/logo-test.svg"
                alt="Logo"
                className="h-15 w-auto"
              />
            </div>

            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item: string, index: number) => {
                const isActive = item === 'Find Jobs' && isFindJobsActive;
                return (
                  <a
                    key={index}
                    href="#"
                    className={`px-2 py-1 text-sm font-medium transition-colors whitespace-nowrap ${
                      isActive
                        ? 'text-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}>
                    {item}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:block relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent text-sm w-48"
              />
            </div>

            <button className="sm:hidden p-2 text-gray-700 hover:text-blue-600">
              <Search size={18} />
            </button>

            <button className="bg-blue-600 text-white px-3 sm:px-4 py-1.5 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium whitespace-nowrap">
              Resume Builder
            </button>

            <div className="hidden md:block flex-shrink-0">
              <img
                src={userProfile.images.profile}
                alt={userProfile.name}
                className="w-8 h-8 rounded-full object-cover border border-gray-300"
              />
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors">
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex justify-center mb-4">
              <div className="relative">
                <img
                  src={userProfile.images.profile}
                  alt={userProfile.name}
                  className="w-20 h-20 rounded-full border-4 border-white object-cover shadow-md"
                />
              </div>
            </div>

            <div className="mb-4 px-4">
              <div className="relative"></div>
            </div>

            <div className="space-y-1 px-4">
              {navItems.map((item: string, index: number) => {
                const isActive = item === 'Find Jobs' && isFindJobsActive;
                return (
                  <a
                    key={index}
                    href="#"
                    className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                      isActive
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}>
                    {item}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default TopNavbar;
