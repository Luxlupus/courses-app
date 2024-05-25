import React from "react";
import HeaderLayout from "./components/Header/Header";
import CourseCards from "./components/Courses/components/CourseCard/CourseCards";
import "../src/App.css";

const App: React.FC = () => {
  return (
    <>
      <HeaderLayout />
      <CourseCards />
    </>
  );
};

export default App;
