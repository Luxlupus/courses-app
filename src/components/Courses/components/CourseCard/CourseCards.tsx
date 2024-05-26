import CourseCard from "./CourseCard";
import { CourseCardProps } from "../../../../types";
import styled from "styled-components";

const CardsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const CourseCardsContainer = styled.article`
  filter: drop-shadow(2px 0px 8px rgba(0, 0, 0, 0.25));
  overflow: hidden;
  width: 70vw;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const CourseCards: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <CardsWrapper>
      <CourseCardsContainer>
        <CourseCard key={course.id} course={course} />
      </CourseCardsContainer>
    </CardsWrapper>
  );
};

export default CourseCards;
