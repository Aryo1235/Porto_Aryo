import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import EducationTimeLine from "./components/EducationTimeLine";
function App() {
  return (
    <div className=" dark:bg-gray-900 text-gray-800 dark:text-white">
      <Navbar />
      <div className="">
        <Hero />
        <main className=" max-w-5xl mx-auto ">
          <About />
          <Skills />
          <Projects />
          <EducationTimeLine />
          <Contact />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
