import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Educations/Education";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";
import WorkExp from "./pages/workExp/WorkExp";
import { useTheme } from "./context/ThemeContext";
import './App.css';
import MobileNav from "./components/MobileNav/MobileNav";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <ToastContainer />
        <MobileNav />
        <Layout />
        <div className="container">
          <About />
          <Education />
          <Techstack />
          <Projects />
          <WorkExp />
          <Contact />
        </div>
        <footer className="footer py-4">
          <div className="container text-center">
            <h4 className="text-center">
              Made by Ashutosh Patil  &copy; {new Date().getFullYear()}
            </h4>
          </div>
        </footer>
      </div>
      
    </>
  );
}

export default App;
