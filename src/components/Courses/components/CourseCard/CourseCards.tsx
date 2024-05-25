import React from "react";
import CourseCard from "./CourseCard";
import { mockedCoursesList } from "../../../../constants";
import { CoursesList } from "../../../../types";
import styled from "styled-components";
import { Course } from "../../../../types";

const MainContainer = styled.div`
  background-color: #f7f7f7;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const CourseCardContainer = styled.article`
  filter: drop-shadow(2px 0px 8px rgba(0, 0, 0, 0.25));
  overflow: hidden;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Main = styled.main`
  background-color: #f7f7f7;
  display: flex;
  width: 70vw;
  align-items: center;
  justify-content: center;
  padding: 75px 60px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const CourseCards: React.FC = () => {
  const courses: CoursesList = mockedCoursesList;
  return (
    <MainContainer>
      <Main>
        <CourseCardContainer>
          {courses.map((course) => {
            return <CourseCard key={course.id} course={course} />;
          })}
        </CourseCardContainer>
      </Main>
    </MainContainer>
  );
};

export default CourseCards;
