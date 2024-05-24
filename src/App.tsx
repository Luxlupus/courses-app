import React from "react";
import Header from "./components/Header/Header";
import CourseCards from "./components/Courses/components/CourseCard/CourseCards";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <CourseCards />
    </>
  );
};

export default App;
