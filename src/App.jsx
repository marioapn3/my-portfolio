import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Skill from "./components/Skill";
import About from "./components/About";
import Blogspot from "./components/Blogspot";
import BlogDetail from "./components/BlogDetail";

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Project />
        <Blogspot />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <div className="">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;