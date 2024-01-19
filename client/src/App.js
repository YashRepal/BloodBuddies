import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './App.css';
import Layout from './components/Layout';
import Donate from './components/Donate';
import Header from './components/Header';
import Donors from './components/Donors';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path='/' element={<Layout />} />
      <Route exact path='/donate' element={<Donate />} />
      <Route exact path='/donors' element={<Donors />} />
      <Route exact path='/contact' element={<Contact />} />

    </Routes>


    </BrowserRouter>
  );
}

export default App;
