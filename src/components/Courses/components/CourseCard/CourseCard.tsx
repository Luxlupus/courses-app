import { CourseCardProps } from "../../../../types";
import { getCourseDuration } from "../../../../helpers/getCourseDuration";
import styled from "styled-components";
import Button from "../../../../common/Button/Button";
import { getAuthorsName } from "../../../../helpers/getAuthorsName";
import { formatCreationDate } from "../../../../helpers/formatCreationDate";

const CourseWrapper = styled.div`
  border-left: 1rem solid #2e2e2e;
  border-radius: 1%;
  display: flex;
  padding: 1.5rem;
  margin-top: 2rem;
  justify-content: space-between;
  background-color: #ffffff;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
  }
`;

const CourseInfoContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 70%;
  filter: drop-shadow(2px 0px 8px rgba(0, 0, 0, 0.25));
  @media (max-width: 991px) {
    width: 90%;
  }
`;

const CourseTitle = styled.h1`
  margin: 0;
  font:
    700 20px/160% Open Sans,
    sans-serif;
  color: #000;
  padding: 10px;
  text-transform: capitalize;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const CourseDescription = styled.p`
  font:
    400 16px/20px Open Sans,
    sans-serif;
  color: var(--primary-efx-dark, #333e48);

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const AuthorInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 1rem;
  width: 20%;
  padding: 0.5rem;
  @media (max-width: 991px) {
    width: 90%;
    padding: 1.5rem;
  }
`;
const AuthorInfoText = styled.p`
  margin: 0;
  font:
    400 16px/20px Open Sans,
    sans-serif;
  color: var(--primary-efx-dark, #333e48);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  line-height: 1.5rem;

  strong {
    font-weight: 700;
  }
`;

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <CourseWrapper>
      <CourseInfoContainer>
        <CourseTitle>{course.title}</CourseTitle>
        <CourseDescription>{course.description}</CourseDescription>
      </CourseInfoContainer>
      <AuthorInfoContainer>
        <AuthorInfoText>
          <strong>Authors:</strong> {getAuthorsName(course.authors)} <br />
          <strong>Duration:</strong> {getCourseDuration(course.duration)} <br />
          <strong>Created:</strong> {formatCreationDate(course.creationDate)}
        </AuthorInfoText>
        <Button>SHOW COURSE</Button>
      </AuthorInfoContainer>
    </CourseWrapper>
  );
};

export default CourseCard;
