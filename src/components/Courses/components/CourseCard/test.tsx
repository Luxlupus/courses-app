import styled from "styled-components";

interface CourseCardProps {
  imgSrc: string;
  altText: string;
  title: string;
  description: string;
  authors: string;
  duration: string;
  createdDate: string;
}

const Home: React.FC = () => {
  const courses = [
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7ad9fd35496b441273229f33ae5c1b258ee065669684904237c723f9dc54ec7d?apiKey=0e9415826f0c483c880e137971099b43&",
      altText: "Image representing Angular course",
      title: "Angular",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      authors: "Dave Haisenberg, Tony Ja",
      duration: "2:30 hours",
      createdDate: "20.03.2012",
    },
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7ad9fd35496b441273229f33ae5c1b258ee065669684904237c723f9dc54ec7d?apiKey=0e9415826f0c483c880e137971099b43&",
      altText: "Image representing React course",
      title: "React",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      authors: "Dave Simonnds, Valentina Lary",
      duration: "1:00 hours",
      createdDate: "14.08.2017",
    },
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7ad9fd35496b441273229f33ae5c1b258ee065669684904237c723f9dc54ec7d?apiKey=0e9415826f0c483c880e137971099b43&",
      altText: "Image representing ASP .NET course",
      title: "ASP .NET",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      authors: "Sam Smith Tony Robbins",
      duration: "3:30 hours",
      createdDate: "01.06.2022",
    },
  ];

  return (
    <Main>
      <Container>
        <SearchForm>
          <label htmlFor="searchInput" className="visually-hidden">
            Input text
          </label>
          <InputText
            type="text"
            id="searchInput"
            placeholder="Input text"
            aria-label="Input text"
          />
          <SearchButton type="submit">Search</SearchButton>
        </SearchForm>

        {courses.map((course, index) => (
          <CourseCard
            key={index}
            imgSrc={course.imgSrc}
            altText={course.altText}
            title={course.title}
            description={course.description}
            authors={course.authors}
            duration={course.duration}
            createdDate={course.createdDate}
          />
        ))}
      </Container>
    </Main>
  );
};

const CourseCard: React.FC<CourseCardProps> = ({
  imgSrc,
  altText,
  title,
  description,
  authors,
  duration,
  createdDate,
}) => (
  <Card>
    <ImageColumn>
      <img loading="lazy" src={imgSrc} alt={altText} />
      <CardDetails>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardDetails>
    </ImageColumn>
    <InfoColumn>
      <CardInfo>
        <strong>Authors:</strong> {authors} <br />
        <strong>Duration:</strong> {duration} <br />
        <strong>Created:</strong> {createdDate}
      </CardInfo>
      <CardButton>Show Course</CardButton>
    </InfoColumn>
  </Card>
);

const Main = styled.main`
  background-color: #f7f7f7;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 75px 60px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Container = styled.section`
  display: flex;
  width: 100%;
  max-width: 1122px;
  flex-direction: column;
  margin-bottom: 109px;
  @media (max-width: 991px) {
    margin-bottom: 40px;
  }
`;

const SearchForm = styled.form`
  display: flex;
  width: 564px;
  max-width: 100%;
  gap: 16px;
  font-size: 16px;
  line-height: 150%;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const InputText = styled.input`
  font-family:
    Open Sans,
    sans-serif;
  border-radius: 4px;
  border: 1px solid rgba(207, 207, 207, 1);
  background-color: #fff;
  color: #cfcfcf;
  font-weight: 400;
  flex-grow: 1;
  width: fit-content;
  padding: 18px 16px;
  @media (max-width: 991px) {
    padding-right: 20px;
  }
`;

const SearchButton = styled.button`
  font-family:
    Open Sans,
    sans-serif;
  border-radius: 4px;
  background-color: #007298;
  color: #fff;
  font-weight: 700;
  white-space: nowrap;
  text-align: center;
  text-transform: uppercase;
  padding: 13px 36px;
  cursor: pointer;
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

const Card = styled.article`
  display: flex;
  margin-top: 33px;
  filter: drop-shadow(2px 0px 8px rgba(0, 0, 0, 0.25));
  overflow: hidden;
  gap: 20px;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

const ImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 14px;
  @media (max-width: 991px) {
    width: 100%;
    margin-top: 40px;
  }
`;

const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 11px;
  flex-grow: 1;
`;

const CardTitle = styled.h3`
  color: #000;
  text-transform: capitalize;
  padding: 10px;
  font:
    700 20px/160% Open Sans,
    sans-serif;
`;

const CardDescription = styled.p`
  color: #333e48;
  margin-top: 4px;
  font:
    400 16px/20px Open Sans,
    sans-serif;
`;

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-left: 20px;
  gap: 35px;
  @media (max-width: 991px) {
    width: 100%;
    margin-top: 40px;
  }
`;

const CardInfo = styled.p`
  color: #333e48;
  font-family:
    Open Sans,
    sans-serif;
  font-weight: 400;
  line-height: 20px;
`;

const CardButton = styled.button`
  font-family:
    Open Sans,
    sans-serif;
  border-radius: 4px;
  background-color: #007298;
  color: #fff;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  padding: 13px 32px;
  cursor: pointer;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

export default Home;
