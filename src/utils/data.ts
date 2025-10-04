export const navItems: string[] = [
  "Find Jobs",
  "Top Companies", 
  "Job Tracker",
  "My Calendar",
  "Documents",
  "Messages",
  "Notifications"
];

export interface Job {
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
  category: "featured" | "recommended" | "latest";
}

export const featuredJobs: Job[] = [
  {
    id: 1,
    title: "UI/UX Designer",
    company: "Teams",
    location: "Seattle, USA (Remote)",
    type: "Full-time",
    criteria: "Remote",
    tags: ["Design", "Figma"],
    posted: "1 day ago",
    applicants: 22,
    remote: true,
    category: "featured"
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: "Teams",
    location: "San Francisco, USA (Remote)",
    type: "Full-time",
    criteria: "Remote",
    tags: ["Design", "Figma"],
    posted: "1 day ago",
    applicants: 18,
    remote: true,
    category: "featured"
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Teams",
    location: "New York, USA (Remote)",
    type: "Full-time",
    criteria: "Remote",
    tags: ["Design", "Figma"],
    posted: "2 days ago",
    applicants: 25,
    remote: true,
    category: "featured"
  },
  {
    id: 4,
    title: "UI/UX Designer",
    company: "Teams",
    location: "Austin, USA (Remote)",
    type: "Full-time",
    criteria: "Remote",
    tags: ["Design", "Figma"],
    posted: "1 day ago",
    applicants: 15,
    remote: true,
    category: "featured"
  },
  {
    id: 5,
    title: "UI/UX Designer",
    company: "Teams",
    location: "Boston, USA (Remote)",
    type: "Full-time",
    criteria: "Remote",
    tags: ["Design", "Figma"],
    posted: "3 days ago",
    applicants: 30,
    remote: true,
    category: "featured"
  },
  {
    id: 6,
    title: "UI/UX Designer",
    company: "Teams",
    location: "Chicago, USA (Remote)",
    type: "Full-time",
    criteria: "Remote",
    tags: ["Design", "Figma"],
    posted: "1 day ago",
    applicants: 20,
    remote: true,
    category: "featured"
  },
  {
    id: 7,
    title: "UI/UX Designer",
    company: "Teams",
    location: "Denver, USA (Remote)",
    type: "Full-time",
    criteria: "Remote",
    tags: ["Design", "Figma"],
    posted: "2 days ago",
    applicants: 17,
    remote: true,
    category: "featured"
  },
  {
    id: 8,
    title: "UI/UX Designer",
    company: "Teams",
    location: "Miami, USA (Remote)",
    type: "Full-time",
    criteria: "Remote",
    tags: ["Design", "Figma"],
    posted: "1 day ago",
    applicants: 22,
    remote: true,
    category: "featured"
  },
  {
    id: 9,
    title: "UI/UX Designer",
    company: "Teams",
    location: "Portland, USA (Remote)",
    type: "Full-time",
    criteria: "Remote",
    tags: ["Design", "Figma"],
    posted: "4 days ago",
    applicants: 12,
    remote: true,
    category: "featured"
  },
  {
    id: 10,
    title: "UI/UX Designer",
    company: "Teams",
    location: "Los Angeles, USA (Remote)",
    type: "Full-time",
    criteria: "Remote",
    tags: ["Design", "Figma"],
    posted: "1 day ago",
    applicants: 28,
    remote: true,
    category: "featured"
  }
];

export const recommendedJobs: Job[] = [
  {
    id: 11,
    title: "UI/UX Designer",
    company: "Teams",
    location: "Seattle, USA (Remote)",
    type: "Full-time",
    criteria: "Remote",
    tags: ["Design", "Figma"],
    posted: "1 day ago",
    applicants: 22,
    remote: true,
    category: "recommended"
  },
  {
    id: 12,
    title: "UI/UX Designer",
    company: "Teams",
    location: "San Francisco, USA (Remote)",
    type: "Full-time",
    criteria: "Remote",
    tags: ["Design", "Figma"],
    posted: "1 day ago",
    applicants: 18,
    remote: true,
    category: "recommended"
  },
  {
    id: 13,
    title: "UI/UX Designer",
    company: "Teams",
    location: "New York, USA (Remote)",
    type: "Full-time",
    criteria: "Remote",
    tags: ["Design", "Figma"],
    posted: "2 days ago",
    applicants: 25,
    remote: true,
    category: "recommended"
  },
  {
    id: 14,
    title: "UI/UX Designer",
    company: "Teams",
    location: "Austin, USA (Remote)",
    type: "Full-time",
    criteria: "Remote",
    tags: ["Design", "Figma"],
    posted: "1 day ago",
    applicants: 15,
    remote: true,
    category: "recommended"
  },
  {
    id: 15,
    title: "UI/UX Designer",
    company: "Teams",
    location: "Boston, USA (Remote)",
    type: "Full-time",
    criteria: "Remote",
    tags: ["Design", "Figma"],
    posted: "3 days ago",
    applicants: 30,
    remote: true,
    category: "recommended"
  },
  {
    id: 16,
    title: "UI/UX Designer",
    company: "Teams",
    location: "Chicago, USA (Remote)",
    type: "Full-time",
    criteria: "Remote",
    tags: ["Design", "Figma"],
    posted: "1 day ago",
    applicants: 20,
    remote: true,
    category: "recommended"
  },
  {
    id: 17,
    title: "UI/UX Designer",
    company: "Teams",
    location: "Denver, USA (Remote)",
    type: "Full-time",
    criteria: "Remote",
    tags: ["Design", "Figma"],
    posted: "2 days ago",
    applicants: 17,
    remote: true,
    category: "recommended"
  },
  {
    id: 18,
    title: "UI/UX Designer",
    company: "Teams",
    location: "Miami, USA (Remote)",
    type: "Full-time",
    criteria: "Remote",
    tags: ["Design", "Figma"],
    posted: "1 day ago",
    applicants: 22,
    remote: true,
    category: "recommended"
  },
  {
    id: 19,
    title: "UI/UX Designer",
    company: "Teams",
    location: "Portland, USA (Remote)",
    type: "Full-time",
    criteria: "Remote",
    tags: ["Design", "Figma"],
    posted: "4 days ago",
    applicants: 12,
    remote: true,
    category: "recommended"
  },
  {
    id: 20,
    title: "UI/UX Designer",
    company: "Teams",
    location: "Los Angeles, USA (Remote)",
    type: "Full-time",
    criteria: "Remote",
    tags: ["Design", "Figma"],
    posted: "1 day ago",
    applicants: 28,
    remote: true,
    category: "recommended"
  }
];

export const latestJobs: Job[] = [
  {
    id: 21,
    title: "UI/UX Designer",
    company: "Teams",
    location: "Seattle, USA (Remote)",
    type: "Full-time",
    criteria: "Remote",
    tags: ["Design", "Figma"],
    posted: "1 hour ago",
    applicants: 5,
    remote: true,
    category: "latest"
  },
  {
    id: 22,
    title: "UI/UX Designer",
    company: "Teams",
    location: "San Francisco, USA (Remote)",
    type: "Full-time",
    criteria: "Remote",
    tags: ["Design", "Figma"],
    posted: "2 hours ago",
    applicants: 8,
    remote: true,
    category: "latest"
  },
  {
    id: 23,
    title: "UI/UX Designer",
    company: "Teams",
    location: "New York, USA (Remote)",
    type: "Full-time",
    criteria: "Remote",
    tags: ["Design", "Figma"],
    posted: "3 hours ago",
    applicants: 12,
    remote: true,
    category: "latest"
  },
  {
    id: 24,
    title: "UI/UX Designer",
    company: "Teams",
    location: "Austin, USA (Remote)",
    type: "Full-time",
    criteria: "Remote",
    tags: ["Design", "Figma"],
    posted: "4 hours ago",
    applicants: 7,
    remote: true,
    category: "latest"
  },
  {
    id: 25,
    title: "UI/UX Designer",
    company: "Teams",
    location: "Boston, USA (Remote)",
    type: "Full-time",
    criteria: "Remote",
    tags: ["Design", "Figma"],
    posted: "5 hours ago",
    applicants: 15,
    remote: true,
    category: "latest"
  },
  {
    id: 26,
    title: "UI/UX Designer",
    company: "Teams",
    location: "Chicago, USA (Remote)",
    type: "Full-time",
    criteria: "Remote",
    tags: ["Design", "Figma"],
    posted: "6 hours ago",
    applicants: 9,
    remote: true,
    category: "latest"
  },
  {
    id: 27,
    title: "UI/UX Designer",
    company: "Teams",
    location: "Denver, USA (Remote)",
    type: "Full-time",
    criteria: "Remote",
    tags: ["Design", "Figma"],
    posted: "7 hours ago",
    applicants: 11,
    remote: true,
    category: "latest"
  },
  {
    id: 28,
    title: "UI/UX Designer",
    company: "Teams",
    location: "Miami, USA (Remote)",
    type: "Full-time",
    criteria: "Remote",
    tags: ["Design", "Figma"],
    posted: "8 hours ago",
    applicants: 6,
    remote: true,
    category: "latest"
  },
  {
    id: 29,
    title: "UI/UX Designer",
    company: "Teams",
    location: "Portland, USA (Remote)",
    type: "Full-time",
    criteria: "Remote",
    tags: ["Design", "Figma"],
    posted: "9 hours ago",
    applicants: 14,
    remote: true,
    category: "latest"
  },
  {
    id: 30,
    title: "UI/UX Designer",
    company: "Teams",
    location: "Los Angeles, USA (Remote)",
    type: "Full-time",
    criteria: "Remote",
    tags: ["Design", "Figma"],
    posted: "10 hours ago",
    applicants: 18,
    remote: true,
    category: "latest"
  }
];

export const userProfile = {
  name: "Albert Flores",
  title: "Senior Product Designer",
  location: "San Francisco, CA",
  stats: [
    { value: 140, label: "Profile Visitors" },
    { value: 20, label: "Pressure Viewers" },
    { value: 88, label: "My Jobs" }
  ],
  images: {
    cover: "https://images.unsplash.com/photo-1579546929662-711aa81148cf?w=1200&h=300&fit=crop",
    profile: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  }
};

export const upcomingInterviews = [
  {
    id: 1,
    title: "Product Designer Interview",
    company: "Tech Corp",
    time: "10:00 AM",
    date: "Today"
  },
  {
    id: 2, 
    title: "UI/UX Designer Interview",
    company: "Design Studio",
    time: "2:00 PM",
    date: "Tomorrow"
  }
];