
import './App.css';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Dashboard } from './Pages/Dashboard';
import { Careers } from './Pages/Careers';
import { Contact } from './Pages/Contact';
import { Layout } from './Components/Layout';
import { PageNotFound } from './Pages/PageNotFound';
import './assets/css/layout.css'

function App() {

  return (
    <div className="App">
      <BrowserRouter >
        <div className="content">
          <Routes>
            {/* <Route path="/" element={<Navigate to="" replace />} /> */}
            <Route path='/' element={<Layout />} >
              <Route index element={<Home />} />
              <Route path='/dashboard' element={<Dashboard />} />
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
