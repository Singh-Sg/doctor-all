import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home/Home';
import Features from './component/Features/Features'
import Pricing from './component/Pricing/Pricing'
import ForPatients from './component/ForPatients/ForPatients'
import Blog from './component/Blog/Blog'
import SignUp from './component/components/SignUp/Signup'
import Header from './component/Header/Header';
import SignIn from './component/components/SignIn/SignIn';

function App() {
  const [editorData, setEditorData] = useState('');
  return (
    <div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/features' element={<Features />}></Route>
            <Route path='/pricing' element={<Pricing />}></Route>
            <Route path='/patient' element={<ForPatients />}></Route>
            <Route path='/blog' element={<Blog />}></Route>
            <Route path='/signup' element={<SignUp />}></Route>
            <Route path='/signin' element={<SignIn />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    </div >
  );
}

export default App;
