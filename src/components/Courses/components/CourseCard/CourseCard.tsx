import React from "react";
import { Course } from "../../../../types";
import { getCourseDuration } from "../../../../helpers/getCourseDuration";
import "../../../../App.css";

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <section>
      <div className="titleAndDescription">
        <div className="cardTitle"> {course.title}</div>
        <div className="cardDescription">{course.description}</div>
      </div>
      <div className="infoContainer">
        <div className="info">
          <div>Authors: {course.title} </div>
          <div>Duration: {getCourseDuration(course.duration)}</div>
          <div>Created: {course.creationDate}</div>
        </div>
        <div className="infoButtons">
          <button>SHOW COURSE</button>
        </div>
      </div>
    </section>
  );
};

export default CourseCard;
