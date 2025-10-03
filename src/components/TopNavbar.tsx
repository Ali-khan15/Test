import { navItems } from '../utils/data';
import { useLocation } from 'react-router-dom';

const TopNavbar = () => {
  const location = useLocation();
  
  const isFindJobsActive = location.pathname === '/' || location.pathname === '/find-jobs';

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col">
          <div className="flex justify-between items-center h-12">
            <div className="flex items-center space-x-6">
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
                    }`}
                  >
                    {item}
                  </a>
                );
              })}
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent text-sm w-48"
                />
              </div>
              
              <button className="bg-blue-600 text-white px-4 py-1.5 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium whitespace-nowrap">
                Resume Builder
              </button>
            </div>
          </div>
       
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;