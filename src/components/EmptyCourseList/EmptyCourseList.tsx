import styled from "styled-components";
import Button from "../../common/Button/Button";

const Section = styled.section`
  display: flex;
  width: 443px;
  min-width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin: 342px 0 386px;
  @media (max-width: 991px) {
    margin: 40px 0;
  }
`;

const Title = styled.h1`
  font-feature-settings:
    "clig" off,
    "liga" off;
  text-transform: capitalize;
  font:
    32px Open Sans,
    sans-serif;
`;

const Message = styled.p`
  text-align: center;
  font-feature-settings:
    "clig" off,
    "liga" off;
  font-family:
    Open Sans,
    sans-serif;
  font-weight: 400;
  align-self: stretch;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const EmptyCourseList = () => {
  return (
    <Section>
      <Title>Your List Is Empty</Title>
      <Message>
        Please use 'Add New Course' button to add your first course
      </Message>
      <Button>Add new course</Button>
    </Section>
  );
};

export default EmptyCourseList;
