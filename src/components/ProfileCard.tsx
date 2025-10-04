import {useState} from 'react';

// Mock data
const userProfile = {
  name: 'Albert Flores',
  title: 'Senior Product Designer | UI/UX Designer | Graphic Designer | Web...',
  location: 'Clinton, Maryland',
  images: {
    cover:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop',
    profile:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
  },
  stats: [
    {label: 'Profile Visitors', value: '140'},
    {label: 'Resume Viewers', value: '20'},
    {label: 'My Jobs', value: '88'},
  ],
};

const upcomingInterviews = [
  {
    id: 1,
    title: 'Frontend Developer Interview',
    company: 'Tech Corp',
    date: 'Oct 10',
    time: '2:00 PM',
  },
  {
    id: 2,
    title: 'Design Review',
    company: 'Creative Studio',
    date: 'Oct 12',
    time: '10:00 AM',
  },
];

const ProfileCard = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  return (
    <>
      <div className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden">
        <div className="h-32 relative">
          <img
            src={userProfile.images.cover}
            alt="Cover"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="px-6 pb-4">
          <div className="flex justify-center -mt-12 mb-3">
            <div className="relative">
              <img
                src={userProfile.images.profile}
                alt={userProfile.name}
                className="w-24 h-24 rounded-full border-4 border-white object-cover"
              />
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-lg font-semibold text-gray-900 mb-1">
              {userProfile.name}
            </h2>
            <p className="text-gray-600 text-xs leading-relaxed px-2">
              {userProfile.title}
            </p>
            <p className="text-gray-500 text-xs mt-1">{userProfile.location}</p>
          </div>
        </div>
      </div>
      <div className="max-w-sm mt-2 p-4 mx-auto bg-white rounded-lg overflow-hidden">
        <div className="space-y-4">
          {userProfile.stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-t border-gray-200">
              <div className="text-sm text-gray-700 mt-2">{stat.label}</div>
              <div className="text-base font-medium text-blue-600 mt-2">
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-sm mt-2 p-4 mx-auto bg-white rounded-lg overflow-hidden">
        <div className="pt-4">
          <button
            onClick={() => setIsCalendarOpen(!isCalendarOpen)}
            className="flex items-center justify-between w-full text-left focus:outline-none">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                My calendar
              </h3>
              <p className="text-xs text-blue-600">Upcoming interviews</p>
            </div>
            <svg
              className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                isCalendarOpen ? 'transform rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isCalendarOpen && (
            <div className="mt-4 space-y-3">
              {upcomingInterviews.map(interview => (
                <div
                  key={interview.id}
                  className="border-l-4 border-blue-500 pl-3 py-2 bg-blue-50">
                  <p className="font-medium text-gray-800 text-sm">
                    {interview.title}
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    {interview.company} • {interview.date} • {interview.time}
                  </p>
                </div>
              ))}

              <div className="border-l-4 border-green-500 pl-3 py-2 bg-green-50">
                <p className="font-medium text-gray-800 text-sm">
                  Team Meeting
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  Weekly Sync • Tomorrow • 11:00 AM
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-3 py-2 bg-purple-50">
                <p className="font-medium text-gray-800 text-sm">
                  Client Presentation
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  Project Review • Friday • 3:00 PM
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
