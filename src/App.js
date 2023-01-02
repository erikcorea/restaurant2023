import './App.css';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer.js';
import Home from './components/Home/Home.js';
import Navbar from './components/Nav/Navbar.js';
import About from './Pages/About.js';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/about' element={< About />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
