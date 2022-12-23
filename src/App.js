import './App.scss';
import { Routes,Route } from 'react-router-dom';
import Layout from "./components/Layout";
import Sidebar from './components/Sidebar';
import About from './components/Layout/pages/About';
import Home from './components/Layout/pages/Home';
import Contact from './components/Layout/pages/Contact';
import Projects from './components/Layout/pages/Projects';
function App() {
  return (
    <>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
