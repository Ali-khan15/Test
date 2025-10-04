import {featuredJobs, recommendedJobs, latestJobs} from '../utils/data';
import JobCard from '../components/JobCard';
import ProfileCard from '../components/ProfileCard';
import {Search} from 'lucide-react';

const FindJobs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200"></div>

      <div className="px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <div className="w-full lg:w-80 flex-shrink-0">
            <div className="sticky top-6 lg:top-8">
              <ProfileCard />
            </div>
          </div>

          <div className="flex-1 overflow-visible">
            <div className="border-b border-gray-200 pb-6">
              <div className="max-w-7xl mx-auto">
                <div className="mb-6">
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    Find your Dream Job,{' '}
                    <span className="text-blue-600">Albert!</span>
                  </h1>
                  <p className="text-gray-500 text-sm sm:text-base">
                    Explore the latest job openings and apply for the best
                    opportunities available today!
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 sm:p-6 mb-4">
                  <div className="flex flex-col sm:flex-row gap-3 items-stretch">
                    <input
                      type="text"
                      placeholder="Job Title, Company, or Keywords"
                      className="flex-1 px-4 py-2.5 bg-white border-r border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 sm:border-r-0 sm:rounded-r-none"
                    />

                    <select className="px-4 py-2.5 bg-white border-r border-gray-300 rounded-lg text-sm text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:border-r-0 sm:rounded-none">
                      <option>Select Location</option>
                      <option>Remote</option>
                      <option>New York</option>
                      <option>London</option>
                    </select>

                    <select className="px-4 py-2.5 bg-white border-r border-gray-300 rounded-lg text-sm text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:border-r-0 sm:rounded-none">
                      <option>Job Type</option>
                      <option>Full Time</option>
                      <option>Part Time</option>
                      <option>Contract</option>
                    </select>

                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 sm:rounded-l-none">
                      <Search size={16} />
                      Search
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm text-gray-500">Similar:</span>
                  <button className="px-3 py-1.5 border border-gray-300 rounded text-sm text-gray-600 hover:border-gray-400 transition-colors">
                    Frontend
                  </button>
                  <button className="px-3 py-1.5 border border-gray-300 rounded text-sm text-gray-600 hover:border-gray-400 transition-colors">
                    Backend
                  </button>
                  <button className="px-3 py-1.5 border border-gray-300 rounded text-sm text-gray-600 hover:border-gray-400 transition-colors">
                    Graphic Designer
                  </button>
                </div>
              </div>
            </div>

            <div className="mb-8 sm:mb-10 pt-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Featured Jobs
                </h2>
                <button className="text-blue-600 underline hover:text-blue-800 font-medium text-sm text-left sm:text-center">
                  See Featured Jobs
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
                {featuredJobs.map(job => (
                  <JobCard key={job.id} job={job} showPromoted={true} />
                ))}
              </div>
            </div>

            <div className="mb-8 sm:mb-10">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Recommended Jobs
                </h2>
                <button className="text-blue-600 underline hover:text-blue-800 font-medium text-sm text-left sm:text-center">
                  See Recommended Jobs
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
                {recommendedJobs.map(job => (
                  <JobCard key={job.id} job={job} showPromoted={false} />
                ))}
              </div>
            </div>

            <div className="mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Latest Jobs
                </h2>
                <button className="text-blue-600 underline hover:text-blue-800 font-medium text-sm text-left sm:text-center">
                  See Latest Jobs
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
                {latestJobs.map(job => (
                  <JobCard key={job.id} job={job} showPromoted={false} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindJobs;
