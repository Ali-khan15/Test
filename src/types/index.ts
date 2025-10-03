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
}

export interface JobCardProps {
  job: Job;
}