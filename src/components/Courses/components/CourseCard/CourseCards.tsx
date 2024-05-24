import React from "react";
import CourseCard from "./CourseCard";
import { mockedCoursesList } from "../../../../constants";
import { CoursesList } from "../../../../types";
import "../../../../App.css";

const CourseCards: React.FC = () => {
  const courses: CoursesList = mockedCoursesList;
  return (
    <div className="cardContainer">
      {courses.map((course) => {
        return <CourseCard key={course.id} course={course} />;
      })}
    </div>
  );
};

export default CourseCards;
