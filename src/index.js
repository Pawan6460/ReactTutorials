import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from "./pages/Home";
import Concepts from './pages/Concepts';
import NoPage from './pages/Nopage';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import AdvConcepts from './pages/AdvancedConcepts';
import Navbar from './pages/Navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
const navbarItems = [
  { path: '/', name: 'Home' },
  { path: '/concepts', name: 'Concepts' },
  { path: '/advconcepts', name: 'Advance Concepts' }
]
root.render(
  <Router>
    <Navbar items={navbarItems}/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/concepts' element={<Concepts />} />
      <Route path='/advconcepts' element={<AdvConcepts />} />
      <Route path='*' element={<NoPage />} />
    </Routes>
  </Router>
);

// Then we define our <Routes>. An application can have multiple <Routes>
//<Route>s can be nested.
//We wrap our content first with <BrowserRouter>
reportWebVitals();
