import CourseCards from "./components/CourseCard/CourseCards";
import CourseInfo from "../CourseInfo/CourseInfo";
import SearchBar from "./components/SearchBar/SearchBar";
import { mockedCoursesList } from "../../constants";
import { CoursesList } from "../../types";

const Courses = () => {
  const courses: CoursesList = mockedCoursesList;
  return (
    <>
      <SearchBar />
      <>
        {courses.map((course) => {
          return <CourseCards key={course.id} course={course} />;
        })}
      </>
    </>
  );
};

export default Courses;
