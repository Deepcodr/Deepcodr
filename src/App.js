import './App.css';
import { BrowserRouter ,Route,Routes } from 'react-router-dom';
import Home from './components/Home.js';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' index element={<Home />}></Route>
          <Route path='/experience' index element={<Experience />}></Route>
          <Route path='/projects' index element={<Projects />}></Route>
          <Route path='/certifications' index element={<Certifications />}></Route>
          <Route path='/contact' index element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
