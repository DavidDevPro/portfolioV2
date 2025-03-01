import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectPage from "./pages/ProjectPage";
import OneProjectPage from "./pages/OneProjectPage";
import ContactPage from "./pages/ContactPage";
import MentionsPage from "./pages/MentionsPage";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  const basename = import.meta.env.MODE === "production" ? "/" : "";
  return (
    <>
      <Router basename={basename}>
        {/* Header Navigation*/}
        <Header />
        <ScrollToTop />
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/project/:id" element={<OneProjectPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/mentions-legales" element={<MentionsPage />} />
        </Routes>
        {/* Footer*/}
        <Footer />
      </Router>
    </>
  );
};

export default App;
