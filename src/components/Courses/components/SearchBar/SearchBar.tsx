import styled from "styled-components";
import Button from "../../../../common/Button/Button";

const SearchFormBtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SearchFormBtnContainer = styled.section`
  display: flex;
  justify-content: space-between;
  width: 70vw;
  align-items: center;
  margin-top: 2rem;
  @media (max-width: 991px) {
    padding: 0px 20px;
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const SearchForm = styled.form`
  display: flex;
  width: 564px;
  max-width: 100%;
  gap: 20px;
  font-size: 16px;
  line-height: 150%;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const InputText = styled.input`
  font-size: 16px;
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

const SearchBar = () => {
  return (
    <SearchFormBtnWrapper>
      <SearchFormBtnContainer>
        <SearchForm>
          <InputText placeholder="Input text" />
          <Button>SEARCH</Button>
        </SearchForm>
        <Button>ADD NEW COURSE</Button>
      </SearchFormBtnContainer>
    </SearchFormBtnWrapper>
  );
};

export default SearchBar;
