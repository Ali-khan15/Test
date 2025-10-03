import { featuredJobs, stats } from '../utils/data';
import JobCard from '../components/JobCard';

const FindJobs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Find your Dream Job, Albert!
            </h1>
            <p className="text-gray-600">
              Explore the latest job openings and apply for the best opportunities available today!
            </p>
          </div>
          
          {/* Search Filters */}
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Job Title, Company, or Keywords
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Search jobs..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Location
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>All Locations</option>
                  <option>Remote</option>
                  <option>USA</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Job Type
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>All Job Types</option>
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Contract</option>
                </select>
              </div>
              <div className="flex items-end">
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Job Listings */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Featured Jobs</h2>
              <div className="space-y-4">
                {featuredJobs.map(job => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Calendar */}
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Profile Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Profile Visitors</span>
                  <span className="font-semibold text-gray-800">{stats.profileVisitors}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Pressure Viewers</span>
                  <span className="font-semibold text-gray-800">{stats.pressureViewers}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">My Jobs</span>
                  <span className="font-semibold text-gray-800">{stats.myJobs}</span>
                </div>
              </div>
            </div>

            {/* Calendar Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">My Calendar</h3>
              <div className="space-y-4">
                <h4 className="font-medium text-gray-700">Upcoming interviews</h4>
                <div className="space-y-3">
                  <div className="border-l-4 border-blue-500 pl-4 py-1">
                    <p className="font-medium text-gray-800">Product Designer Interview</p>
                    <p className="text-sm text-gray-600">Tech Corp • Today • 10:00 AM</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4 py-1">
                    <p className="font-medium text-gray-800">UI/UX Designer Interview</p>
                    <p className="text-sm text-gray-600">Design Studio • Tomorrow • 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* See Featured Jobs Button */}
            <button className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium text-center">
              See Featured Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindJobs;