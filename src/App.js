import './App.css';
import { BrowserRouter ,Route,Routes } from 'react-router-dom';
import Home from './components/Home.js';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import UnderConstruction from './components/UnderConstruction';
import NotFound from './components/404';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' index element={<Home />}></Route>
          <Route path='/experience' element={<Experience />}></Route>
          <Route path='*'  element={<UnderConstruction />}></Route>
          {/* <Route path='/projects'  element={<Projects />}></Route> */}
          {/* <Route path='/certifications' element={<Certifications />}></Route> */}
          {/* <Route path='/contact' element={<Contact />}></Route> */}
          {/* <Route path='*' element={<NotFound />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
