export interface Course {
  id: string;
  title: string;
  description: string;
  creationDate: string;
  duration: number;
  authors: string[];
}

export interface Authors {
  id: string;
  name: string;
}

export interface CourseCardProps {
  course: Course;
}
export type CoursesList = Array<Course>;
export type AuthorsList = Array<Authors>;
