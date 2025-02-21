
import './App.css';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Careers } from './Pages/Careers';
import { Contact } from './Pages/Contact';
import { Layout } from './Components/Layout';
import { PageNotFound } from './Pages/PageNotFound';

function App() {

  return (
    <div className="App">
      <BrowserRouter >
        <div className="content">
          <Routes>
            {/* <Route path="/" element={<Navigate to="" replace />} /> */}
            <Route path='/' element={<Layout />} >
              <Route index element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/careers/:id' element={<Careers />} />
              <Route path='/*' element={<PageNotFound />} />
            </Route>
            <Route path='/*' element={<PageNotFound />} />
          </Routes>


        </div>
      </BrowserRouter >
    </div >
  );
}

export default App;
