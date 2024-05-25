import { mockedCoursesList } from "../constants";
import { mockedAuthorsList } from "../constants";
import { CoursesList, AuthorsList, CourseCardProps } from "../types";

export function getAuthorsName(authorID: string[]): string {
  const authorsMap = new Map<string, string>();
  mockedAuthorsList.forEach((author) => {
    authorsMap.set(author.id, author.name);
  });

  const courseAuthors: string[] = [];
  const courses = mockedCoursesList;

  courses.forEach((course) => {
    const authorNames = course.authors
      .map((authorId) => authorsMap.get(authorId))
      .filter((name) => name !== undefined) as string[];

    courseAuthors.push(...authorNames);
  });

  const allAuthors = courseAuthors.join(", ");

  return allAuthors;
}
