import { Route, Routes} from 'react-router-dom';

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