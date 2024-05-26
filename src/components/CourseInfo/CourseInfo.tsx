import styled from "styled-components";
import { CourseCardProps } from "../../types";
import { getAuthorsName } from "../../helpers/getAuthorsName";
import { formatCreationDate } from "../../helpers/formatCreationDate";
import { getCourseDuration } from "../../helpers/getCourseDuration";

const CourseInfoWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const CourseInfoGrid = styled.div`
  display: grid;
  width: 70vw;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 5fr 1fr;
  gap: 1.5rem;
  padding: 2rem;
`;

const CourseTitle = styled.h1`
  margin: 0;
  font:
    700 25px/160% Open Sans,
    sans-serif;
  color: var(--primary-efx-dark, #333e48);
  padding: 10px;
  text-transform: capitalize;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const CourseInfoContainer = styled.div`
  display: flex;
  background-color: #ffffff;
  padding: 2.5rem;
`;

const CourseDescriptionAndHeader = styled.div`
  border-right: 1px solid #333e48;
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 1.5rem;
  padding: 1rem;
`;

const DescriptionTitle = styled.h2`
  margin: 0;
  font:
    700 16px/160% Open Sans,
    sans-serif;
  color: var(--primary-efx-dark, #333e48);
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
  border-left: 1px solid #333e48;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  width: 50%;
  padding: 0.5rem;
  @media (max-width: 991px) {
    width: 90%;
    padding: 1.5rem;
  }
`;

const AuthorInfoText = styled.p`
  margin: 1rem;
  font:
    400 16px/20px Open Sans,
    sans-serif;
  color: var(--primary-efx-dark, #333e48);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  line-height: 2rem;

  strong {
    font-weight: 700;
  }
`;

const Button = styled.button`
  font:
    800 16px/100% Open Sans,
    sans-serif;
  color: var(--white, #fff);
  background-color: var(--primary-blue, #007298);
  border-radius: 4px;
  padding: 13px 32px;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  border: none;
  width: 20%;
  justify-self: end;

  @media (max-width: 991px) {
    padding: 5px 20px;
  }
`;

const CourseInfo: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <CourseInfoWrapper>
      <CourseInfoGrid>
        <CourseTitle>{course.title}</CourseTitle>
        <CourseInfoContainer>
          <CourseDescriptionAndHeader>
            <DescriptionTitle>Description:</DescriptionTitle>
            <CourseDescription>{course.description}</CourseDescription>
          </CourseDescriptionAndHeader>
          <AuthorInfoContainer>
            <AuthorInfoText>
              <strong>ID:</strong> {course.id}
              <br />
              <strong>Authors:</strong> {getAuthorsName(course.authors)}
              <br />
              <strong>Duration:</strong> {getCourseDuration(course.duration)}
              <br />
              <strong>Created:</strong>{" "}
              {formatCreationDate(course.creationDate)}
            </AuthorInfoText>
          </AuthorInfoContainer>
        </CourseInfoContainer>
        <Button>BACK</Button>
      </CourseInfoGrid>
    </CourseInfoWrapper>
  );
};

export default CourseInfo;
