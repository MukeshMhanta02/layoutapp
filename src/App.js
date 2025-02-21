
import './App.css';
import { Header } from './Components/Header';
import { SideBar } from './Components/SideBar';
import { Footer } from './Components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Careers } from './Pages/Careers';
import { Contact } from './Pages/Contact';

function App() {

  return (
    <div className="App">
      <BrowserRouter >
        <div className="content">
          <SideBar />
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/careers/:id' element={<Careers />} />

          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
