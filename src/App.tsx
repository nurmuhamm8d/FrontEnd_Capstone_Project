import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Inner } from './pages/Inner/Inner';
import { AboutMe } from './pages/Inner/sections/AboutMe';
import { Education } from './pages/Inner/sections/Education';
import { Experience } from './pages/Inner/sections/Experience';
import { PortfolioSection } from './pages/Inner/sections/PortfolioSection';
import { Contacts } from './pages/Inner/sections/Contacts';
import { FeedbackSection } from './pages/Inner/sections/FeedbackSection';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inner" element={<Inner />}>
          <Route index element={<Navigate to="about" replace />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="education" element={<Education />} />
          <Route path="experience" element={<Experience />} />
          <Route path="portfolio" element={<PortfolioSection />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="feedback" element={<FeedbackSection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
