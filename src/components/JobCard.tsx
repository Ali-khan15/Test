import type { JobCardProps } from '../types';

const JobCard = ({ job }: JobCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
          <p className="text-gray-600">{job.company} | {job.location}</p>
        </div>
        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
          Presented
        </span>
      </div>
      
      <div className="mb-4">
        <span className="text-sm text-gray-500">Criteria: {job.criteria}</span>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {job.tags.map((tag: string, index: number) => (
          <span
            key={index}
            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-500">
          {job.posted} | {job.applicants} applicants
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobCard;