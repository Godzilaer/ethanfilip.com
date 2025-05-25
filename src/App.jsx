import { Route, Routes} from 'react-router-dom';
import { React, useEffect } from "react";

import '/src/assets/styles/default.css';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectViewer from './components/ProjectViewer';
import Extracurriculars from './pages/Extracurriculars';
import AwardsAndExperiences from './pages/AwardsAndExperiences';
import NotFound from './pages/NotFound';

export default function App() {
  useEffect(fadeInEffect, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:name" element={<ProjectViewer />} />
        <Route path="/extracurriculars" element={<Extracurriculars />} />
        <Route path="/awards-and-experiences" element={<AwardsAndExperiences />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

function fadeInEffect() {
  const elems = document.querySelectorAll('main *');

  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              const element = entry.target;

              element.classList.add('fade-in-running');
  
              element.addEventListener("animationend", () => {
                  element.classList.remove('fade-in-running');

                  element.classList.add('fade-in-end');
              }, { once: true });

              observer.unobserve(element);
          }
      });
  }, 
  //10% of element seen
  { threshold: 0.1 });

  elems.forEach((element) => {
      observer.observe(element);
  });
}