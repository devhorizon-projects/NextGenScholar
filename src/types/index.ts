export interface CourseItem {
  id: string;
  title: string;
  duration: string;
  level: "Beginner to Advanced" | "Intermediate to Pro" | "Advanced Mastery";
  category: string;
  description: string;
  modules: string[];
  skills: string[];
  keyOutcome: string;
  iconName: string;
  badge?: string;
}

export interface TechMentor {
  id: string;
  name: string;
  role: string;
  company: string;
  expertise: string[];
  image: string;
  bio: string;
}

export interface StudentStory {
  id: string;
  name: string;
  role: string;
  course: string;
  quote: string;
  avatar: string;
  achievement: string;
}

export interface EnrollmentFormData {
  fullName: string;
  email: string;
  phone: string;
  courseId: string;
  experienceLevel: string;
  learningGoal: string;
}
