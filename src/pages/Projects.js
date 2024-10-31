import Project from "../components/Project";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

const Projects = () => {
  return (
    <>
      <SEO />
      <Navbar />
      <div className="my-8">
        <Project />
      </div>
      <Footer />
    </>
  );
};

export default Projects;
