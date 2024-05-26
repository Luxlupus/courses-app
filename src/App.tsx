import HeaderLayout from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
import "../src/App.css";

const App: React.FC = () => {
  return (
    <>
      <HeaderLayout />
      <Courses />
    </>
  );
};

export default App;
