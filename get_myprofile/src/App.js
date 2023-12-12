import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Treatments from './Component/Treatments/Treatments';
import HealthBlogs from './Component/HealthBlogs/HealthBlogs';
import AboutMe from './Component/AboutMe/AboutMe';
import Faqs from './Component/Faqs/Faqs';
import Foot from './Component/Foot/Foot';
import BookAppoint from './Component/BookAppoint/BookAppoint';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<AboutMe />}></Route>
          <Route path='/treatments' element={<Treatments />}></Route>
          <Route path='/health-blogs' element={<HealthBlogs />}></Route>
          <Route path='/book-appoint' element={<BookAppoint />}></Route>
        </Routes>
        <Faqs />
        <Foot />
      </BrowserRouter>
    </div>
  );
}

export default App;
