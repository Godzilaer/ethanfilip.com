import { Route, Routes, useLocation } from 'react-router-dom';

import './assets/styles/default.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import { useEffect } from 'react';


export default function App() {
  SetTitleBasedOnPage();

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

function SetTitleBasedOnPage() {
  const location = useLocation();
  const mainTitle = 'The Ethan Web';

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        document.title = `${mainTitle} - Home`;
        break;
      case '/projects':
        document.title = `${mainTitle} - Projects`;
        break;
      default:
        document.title = `${mainTitle} - 404 Not Found`;
        break;
    }
  }, [location, mainTitle]);
}