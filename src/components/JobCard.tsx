import {useState} from 'react';
import {Bookmark} from 'lucide-react';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  criteria: string;
  tags: string[];
  posted: string;
  applicants: number;
  remote: boolean;
  category: 'featured' | 'recommended' | 'latest';
}

interface JobCardProps {
  job: Job;
  showPromoted?: boolean;
}

const JobCard = ({job, showPromoted = false}: JobCardProps) => {
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-3 sm:p-4 hover:shadow-md transition-shadow w-full sm:w-56 h-auto flex flex-col justify-between">
      <div>
        {showPromoted && (
          <div className="flex justify-start mb-2 sm:mb-3">
            <span className="text-xs px-2 py-1 rounded font-medium bg-blue-50 text-blue-600">
              Promoted
            </span>
          </div>
        )}

        {/* Company Logo/Icon and Title Section */}
        <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
          {/* Company Icon */}
          <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600"
              fill="currentColor"
              viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
          </div>
          
          {/* Title and Company */}
          <div className="flex-1 min-w-0">
            <h3 className="text-sm sm:text-base font-semibold text-gray-900 leading-tight truncate">
              {job.title}
            </h3>
            <p className="text-gray-700 text-xs sm:text-sm mt-0.5 sm:mt-1 truncate">
              {job.company}
            </p>
          </div>
        </div>

        {/* Location and Time/Applicants */}
        <div className="space-y-1.5 sm:space-y-2 mb-2 sm:mb-3">
          <div className="flex items-center gap-1.5">
            <svg
              className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-500 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-gray-600 text-xs truncate">{job.location}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <svg
              className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-500 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-gray-500 text-xs">
              {job.posted} | {job.applicants} applicants
            </span>
          </div>
        </div>
      </div>

      {/* Apply and Save Buttons */}
      <div className="flex items-center gap-2">
        <button className="flex-1 bg-blue-600 text-white py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-xs sm:text-sm">
          Apply Now
        </button>
        <button
          onClick={handleSave}
          className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg border transition-colors ${
            isSaved
              ? 'bg-blue-50 border-blue-600'
              : 'bg-white border-gray-300 hover:border-gray-400'
          }`}>
          <Bookmark
            size={16}
            className={
              isSaved ? 'fill-blue-600 text-blue-600' : 'text-gray-500'
            }
          />
        </button>
      </div>
    </div>
  );
};

export default JobCard;