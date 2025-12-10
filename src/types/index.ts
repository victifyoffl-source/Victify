export interface Module {
  id: string;
  module_number: number;
  title: string;
  description: string;
  duration_weeks: number;
  syllabus: string[];
  learning_outcomes: string[];
  order_index: number;
  image_url: string;
}

export interface Trainee {
  id: string;
  user_id: string;
  full_name: string;
  email: string;
  phone: string;
  enrolled_course: string;
  enrollment_date: string;
  status: 'active' | 'completed' | 'inactive';
}

export interface Progress {
  id: string;
  trainee_id: string;
  module_id: string;
  status: 'not_started' | 'in_progress' | 'completed';
  quiz_score?: number;
  assignment_submitted: boolean;
  assignment_approved: boolean;
  completed_at?: string;
}

export interface Certificate {
  id: string;
  certificate_id: string;
  trainee_id: string;
  module_id: string;
  student_name: string;
  course_title: string;
  completion_date: string;
  pdf_url?: string;
  verified: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image_url?: string;
  featured: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image_url?: string;
  order_index: number;
}

export interface Portfolio {
  id: string;
  title: string;
  description: string;
  category: string;
  image_url?: string;
  technologies: string[];
  project_url?: string;
  featured: boolean;
}

export interface Enrollment {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  selected_course: string;
  message?: string;
  status: 'pending' | 'contacted' | 'enrolled';
}